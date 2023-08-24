const {SubDivision} = require('../models/models');

class SubDivisionController {
    async getAll(req, res) {
        const divisions = await SubDivision.findAll();
        res.send(divisions);
    }
}

module.exports = new SubDivisionController();