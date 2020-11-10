require("dotenv").config();

const mailjet = require('node-mailjet')
  .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

const sendEmail = (data) => {
  const { name, email, subject, message } = data

  const html = `<h3>${name}</h3><br /> <h3>${email}</h3><br /> <h3>${subject}</h3><br /> ${message}`
  const text = `${name}, ${email}, ${subject},  ${message}`

  return  mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": "work4087@gmail.com",
            "Name": "Mailjet Pilot"
          },
          "To": [
            {
              "Email": "work4087@gmail.com",
              "Name": "passenger 1"
            }
          ],
          "Subject": "New message from your web-site!",
          "TextPart": text,
          "HTMLPart": html
        }
      ]
    })

}
exports.sendEmail = sendEmail
