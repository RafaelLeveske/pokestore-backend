const FireType = require('../models/FireType');

module.exports = {
  async index(req, res) {
    const fireTypes = await FireType.findAll();

    return res.json(fireTypes);
  },
  async show(req, res) {
    const { id } = req.params;

    const fireType = await FireType.findByPk(id, {
      include: {
        association: 'fireStocks',
      },
    });

    return res.json(fireType);
  },
};
