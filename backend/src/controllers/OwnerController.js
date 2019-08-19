const OwnerController = require('../models/Owner');

module.exports = {

    async access (req, res) {
        const user = await OwnerController.findOne({ user: req.body.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'Found', user });
        }
        else res.json({ newStatus: 400 });
        
    }

}