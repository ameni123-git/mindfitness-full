const router = require('express').Router();

const Formateur = require('../models/formateur.model');

//1st route 
router.route('/').get((req, res) => {
    //monggosse methode  .find() to get all formateurs de db 
    Formateur.find()
    .then(formateurs => res.json(formateurs ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const formateurname= req.body.formateurname;

  const newFormateur = new Formateur(); 
  newFormateur.formateurname= formateurname ; 

  newFormateur.save()
    .then(() => res.json('Formateur added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;