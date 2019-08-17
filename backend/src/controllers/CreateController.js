const AdmController = require('../models/Adm');
const DoormanController = require('../models/Doorman');
const HouseController = require('../models/House');
const OwnerController = require('../models/Owner');


module.exports = {
    async createAdm(req, res){
        const { name, user } = req.body;

        const userExists = await AdmController.findOne({ user });
        if(userExists){
            return res.json({
                message: "Username já em uso."
            })
        }

        const admCreated = await AdmController.create({
            name,
            user
        });

        return res.json(admCreated);
    },

    async createDoorman(req, res){
        const { name, phone = undefined, email = undefined, typeEmp, user } = req.body;

        const doormanExists = await DoormanController.findOne({ user });
        if (doormanExists){
            return res.json({message: "Porteiro ja cadastrado. Username ja existe. "});
        }

        const doormanCreated = await DoormanController.create({
            name,
            phone,
            email,
            typeEmp,
            user
        });

        return res.json(doormanCreated);
    },

    async createHouse(req, res){
        const { number, block, ownerID = undefined } = req.body;

        const houseExists = await HouseController.findOne({ number, block });
        if(houseExists){
            return res.json({message: "Casa já cadastrada. "});
        }

        const houseCreated = await HouseController.create({
            number,
            block,
            ownerID
        });

        return res.json(houseCreated);
    },

    async createOwner(req, res){
        const {name, phone = undefined, email = undefined, houseNumber, houseBlock, user } = req.body;

        const ownerExists = await OwnerController.findOne({ user });
        if(ownerExists){
            return res.json({ message: "Morador já cadastrado. " });
        }

        const ownerCreated = await OwnerController.create({
            name,
            phone,
            email,
            houseNumber,
            houseBlock,
            user
        });

        return res.json(ownerCreated);

    }

}