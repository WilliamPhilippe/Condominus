const DoormanControlller = require('../models/Doorman');

module.exports = {

    async access(req, res) {
        const user = await DoormanControlller.findOne({ user: req.body.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'Found', user }); 
        }
        else res.json({ newStatus: 400 });
        
    }

}