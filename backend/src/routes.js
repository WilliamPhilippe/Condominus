const express = require("express");
const routes = express.Router();
const CreateController = require('./controllers/CreateController');

const DoormanController = require('./controllers/DoormanController');
const AdmController = require('./controllers/AdmController');

routes.post('/portaria/access', DoormanController.access);
routes.post('/adm/access', AdmController.access);
routes.post('/adm/create/adm', CreateController.createDoorman);
routes.post('/adm/create/doorman', CreateController.createAdm);
routes.post('/adm/create/house', CreateController.createHouse);
routes.post('/*/create/owner', CreateController.createOwner);


module.exports = routes;