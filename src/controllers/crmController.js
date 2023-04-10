import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body)

    try {
        newContact.save();
        res.json({contact: newContact});
    } catch(err) {
        res.json({error: err});
    }
};

export const getContacts = (req, res) => {
    Contact.find({}).then(foundContacts =>
        res.json(foundContacts)
)};

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId).then(foundContact =>
        res.json(foundContact)
)};

export const updateContact = (req, res) => {
    Contact.findByIdAndUpdate({_id: req.params.contactId}, req.body, {new: true}).then(foundContact =>
        res.json(foundContact)
)};

export const deleteContact = (req, res) => {
    Contact.deleteMany({_id: req.params.contactId}).then(deletedContact =>
        res.json(deletedContact)
)};
