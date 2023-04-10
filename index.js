import express from 'express';
import routes from './src/routes/crmRoutes.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
})

// body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// serving static content
app.use(express.static('pictures'))

routes(app)

app.get('/', (req, res) => 
    res.send(`hello world from node server on ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

