const { Event } = require('../models/models');
const { Op, fn, col } = require('sequelize');

function formatDate(dateTime) {
    const parts = dateTime.split(' ');
    const dateParts = parts[0].split('.');
    const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]} ${parts[1]}`;
    return formattedDate;
}

class EventController {
    async getAll(req, res) {
        const { start, end, owid } = req.query;
        const formattedStart = formatDate(start);
        const formattedEnd = formatDate(end);

        const events = await Event.findAll({
            where: {
                EV_OW_ID: { [Op.eq]: owid },
                EV_DATE: {
                    [Op.gte]: formattedStart,
                    [Op.lte]: formattedEnd
                }
            }
        });
        res.send(events);
    }
}

module.exports = new EventController();
