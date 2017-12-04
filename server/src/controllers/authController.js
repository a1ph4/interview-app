const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.auth.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.dataValues
      res.status('200').send({
        route: 'hello',
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        err: err.errors[0].message
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      console.log(email, password)
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          err: 'User not present, Please Register'
        })
      }
      const passwordValid = bcrypt.compareAsync(user.dataValues.password, password)

      if (!passwordValid) {
        res.status(403).send({
          err: 'Login information incorrent'
        })
      } else {
        const userJson = user.dataValues
        res.status('200').send({
          route: 'hello',
          user: userJson,
          token: jwtSignUser(userJson)
        })
      }
    } catch (err) {
      res.status(403).send({
        err: "Can't Login, Please try after sometime"
      })
    }
  }
}
