const VeichlesController = require('../models/Veichles');

module.exports = {
    
    async verifyVeichle(req, res){
        const veichleExists = await VeichlesController.findOne({ plaque: req.body.plaque });

        if(veichleExists){
            return res.json({ message: 'found', veichleExists });
        }
        else return res.status(400).json({ message: 'not found'});
    }

}