const AdmController = require('../models/Adm');

module.exports = {

    async access(req, res){
        const user = await AdmController.findOne({ user: req.headers.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'found', id: userID });
        }
        else return res.status(400).json({ message: "not found" });
    },

}