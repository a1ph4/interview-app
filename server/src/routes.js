module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.status('200').send({
      msg: `registered user ${req.body.email}`
    })
  })
}
