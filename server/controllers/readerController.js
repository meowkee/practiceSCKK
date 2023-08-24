const {Reader} = require('../models/models')

class ReaderController {
    async getAll(req, res) {
        const readers = await Reader.findAll();
        res.send(readers);
    }
}

module.exports = new ReaderController();