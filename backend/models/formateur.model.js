const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const FormateurSchema = new Schema({
  formateurname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Formateur = mongoose.model('Formateur', FormateurSchema);

module.exports = Formateur;