const {JobDegree} = require('../models/models')

class JobDegreeController {
    async getAll(req, res) {
        const jdegree = await JobDegree.findAll();
        res.send(jdegree);
    }
}

module.exports = new JobDegreeController();