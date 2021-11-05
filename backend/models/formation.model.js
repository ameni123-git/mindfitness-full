const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formationSchema = new Schema({
  formateurname: { type: String, required: true, trim: true, minlength: 3 },
  titre: { type: String, required: true },
  lieu: { type: String, required: false },
  date_debut: { type: Date, required: false },
  description: { type: String, required: false },
  difficulté: { type: String, required: false },
  nb_palce : {type: Number, required: false},
  
  programme: { type: String, required: false },
  date_fin: { type: Date, required: false  },
}, {
  timestamps: true,
});

const formation = mongoose.model('Formation', formationSchema);

module.exports = formation;