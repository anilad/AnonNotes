// - - - - = = = = Model = = = = - - - - 
// const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    trim: true,
    required: [true, 'Note is required'],
    minlength: [5, 'Note length must be greater than 5'],
    // unique: true
  },
}, {
  timestamps: true
});
// noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Note = mongoose.model('Note', noteSchema);