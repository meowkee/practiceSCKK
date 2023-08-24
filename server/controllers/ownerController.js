const {Owner} = require('../models/models')

class OwnerController {
    async getAll(req, res) {
        const owners = await Owner.findAll();
        return res.json(owners);
    }
     
}

module.exports = new OwnerController();