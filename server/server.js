require("dotenv").config()
const express = require("express")
const { check, validationResult } = require('express-validator')
const path = require("path")
const { sendEmail } = require("./send-email.js")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json()) // Parse json in request. Available in express 4.16+

app.use(express.static(path.resolve(__dirname, "../public")))


app.post("/api/send_email",
  [
    check('name', 'Your name must be at least 4 characters').trim().escape().isLength({ min: 4 }),
    check('subject').trim().escape().isLength({ min: 8 }),
    check('email', 'Your email is not valid').isEmail().normalizeEmail(),
    check('message', 'Your password must be at least 6 characters').trim().escape().isLength({ min: 6 }),
  ],
  (req, res) => {
    res.set("Content-Type", "application/json")
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }
    const request = sendEmail(req.body)
    request
      .then((result) => {
        res.json({ status: result.body.Messages[0].Status })
      })
      .catch((err) => {
        res.json({ status: err.statusCode })
        console.log(err.statusCode)
      })
  })

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"))
})

app.listen(PORT, function () {
  console.error(`Server has been started on port ${PORT}...`)
})