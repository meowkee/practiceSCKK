const {Worksite} = require('../models/models');

class WorksiteController {
    async getAll(req, res) {
        const sites = await Worksite.findAll();
        res.send(sites);
    }
}

module.exports = new WorksiteController();