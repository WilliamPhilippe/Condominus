const DoormanControlller = require('../models/Doorman');

module.exports = {

    async access(req, res) {
        const user = await DoormanControlller.findOne({ user: req.headers.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'Found', id: userID }); 
        }
        else res.status(400).json({ message: "not found" });
        
    }

}