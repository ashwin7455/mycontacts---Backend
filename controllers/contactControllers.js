const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route Get/api/contacts
//@access public
 
const getContacts =  asyncHandler(async(req,res) => { 
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc create new contacts
//@route PUT/api/contacts
//@access public
 
const createContact =asyncHandler((req,res) => {
    console.log("the request body is:" ,req.body);
    const {name , email , phone} = req.body;    

    if(!name || !email || !phone ){      
        res.status(404);
        throw new Error("all fields are mandatory");
    }
    res.status(201).json({message: "create contact"})   
});

//@desc update  contacts
//@route post/api/contacts:1
//@access public
 
const updateContact =asyncHandler((req,res) => {
    res.status(200).json({message: `update contact for ${req.params.id}` });
});

//@desc Get all contacts
//@route Get/api/contacts
//@access public
 
const getContact = asyncHandler((req,res) => { 
    res.status(200).json({message: "Get all messages"})
});

//@desc delete contacts
//@route delete/api/contacts
//@access public
 
const deleteContact =asyncHandler( (req,res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}` });
});

module.exports = { getContacts , createContact , getContact , deleteContact , updateContact};