const Contact = require('../models/contact');

exports.submitContact = async (req, res) => {
  try {
    const {name,email,project_type,message} = req.body;
    const newContact = new Contact({
        name,
        email,
        project_type,
        message
      });
  
      // Save the record to the database
      await newContact.save({ collection: "contacts" });
      res.status(200).json({ message: 'Record inserted successfully', status: 200 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};