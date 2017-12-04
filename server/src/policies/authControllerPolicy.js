const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            err: 'Please Enter a Valid Email'
          })
          break
        case 'password':
          res.status(400).send({
            err: 'Please Enter a 8-32 character long<br>alphaneumeric password'
          })
          break
        default:
          res.status(400).send({
            err: 'Credentials Not Valid'
          })
      }
    } else {
      console.log(value.length)
      next()
    }
  }

/*   login (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            err: 'Please Enter a Valid Email'
          })
          break
        case 'password':
          res.status(400).send({
            err: 'Please Enter a 8-32 character long<br>alphaneumeric password'
          })
          break
        default:
          res.status(400).send({
            err: 'Credentials Not Valid'
          })
      }
    } else {
      console.log(value.length)
      next()
    }
  } */
}
