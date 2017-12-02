const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status('200').send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        err: err.errors[0].message
      })
    }
  }
}
