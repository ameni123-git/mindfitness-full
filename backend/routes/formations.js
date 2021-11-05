const router = require ('express').Router();
let Formation = require('../models/formation.model');


//réquperer toutes les formations de db 
router.route('/').get((req, res) => {
  Formation.find()
    .then(formations => res.json(formations))
    .catch(err => res.status(400).json('Error:' + err));
}); 

//ajouter une formation 
router.route('/add').post((req, res) => {
  const titre = req.body.titre;
  const formateurname = req.body.formateurname ; 
  const lieu = req.body.lieu; 
  const date_debut = req.body.date_debut;
  const nb_palce = req.body.nb_palce;
  const difficulté = req.body.difficulté;


  const newFormation = new Formation({
    titre,
    formateurname,
    lieu,
    date_debut,
    nb_palce,
    difficulté
   
  });

  newFormation.save()
  .then(() => res.json('formation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Formation.findById(req.params.id)
    .then(formation => res.json(formation))
    .catch(err => res.status(400).json('Error: ' + err));
});

//supprimer une formation par id passe au parm
router.route('/:id').delete((req, res) => {
    Formation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Formation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//modifier une formation par id passe au parm
router.route('/update/:id').post((req, res) => {
  Formation.findById(req.params.id)
    .then(formation => {
     formation.formateurname = req.body.formateurname ;
     formation.titre= req.body.titre;
     formation.lieu = req.body.lieu;
     formation.req.body.date_debut= req.body.date_debut;
     formation.req.body.nb_palce= req.body.nb_palce;
     formation.req.body.difficulté= req.body.difficulté;
     
     formation.save()
        .then(() => res.json('Formation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;