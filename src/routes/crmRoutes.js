import { addNewContact, deleteContact, getContacts, getContactWithId, updateContact } from "../controllers/crmController.js";

const routes = (app) => {
    app.route('/contact')
    // get all the contacts
    .get((req,res,next) => {
        console.log(`Request from: ${req.originalUrl}`);
        next();
    }, getContacts)

    // post a contact
    .post(addNewContact);

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithId)

    // update contact
    .put(updateContact)

    .delete(deleteContact);
};

export default routes;