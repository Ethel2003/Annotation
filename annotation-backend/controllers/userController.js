// Ici on mettra la logique pour récupérer les requêtes, les traiteer et renvoyer les réponses à la vue

/**
 * Create a new user
 * @param {*} req requête envoyée par le front
 * @param {*} res réponse envoyée en retour
 * @returns response HTTP
 */
async function create(req,res){
    let data = req.body
    // appeler le service pour gérer la création
    return res.json(data).status(201)
}

module.exports = {
    create
}