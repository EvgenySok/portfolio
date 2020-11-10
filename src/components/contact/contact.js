import React, { useState } from 'react'
import Address from './address'
import SendEmailForm from './sendEmailForm'



const Contact = () => {
  const [formState, SetFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [formError, SetFormError] = useState({ name: false, email: false, subject: false, message: false })
  const [messageFromServer, SetMessageFromServer] = useState(null)

  const SendMessage = async () => {
    if (!Object.values(formError).includes(true)) {
      try {
        const data = await fetch('/api/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        })
        const result = await data.json()
        SetMessageFromServer(result)
        if (Array.isArray(result)) {
          result.map((it) => SetFormError(prevState => ({ ...prevState, [it.param]: true })))
        }
      } catch (error) {
        SetMessageFromServer('error')
        console.log('error:',)
      }

    }
  }
  console.log('messageFromServer:', messageFromServer)

  const validateForm = () => {
    if (formState.name.trim().length < 4) {
      SetFormError(prevState => ({ ...prevState, name: true }))
    } else {
      SetFormError(prevState => ({ ...prevState, name: false }))
    }
    if (formState.email.trim().length < 5 || !formState.email.includes('@') || !formState.email.includes('.')) {
      SetFormError(prevState => ({ ...prevState, email: true }))
    } else {
      SetFormError(prevState => ({ ...prevState, email: false }))
    }
    if (formState.subject.trim().length < 8) {
      SetFormError(prevState => ({ ...prevState, subject: true }))
    } else {
      SetFormError(prevState => ({ ...prevState, subject: false }))
    }
    if (formState.message.trim().length < 8) {
      SetFormError(prevState => ({ ...prevState, message: true }))
    } else {
      SetFormError(prevState => ({ ...prevState, message: false }))
    }
    SendMessage()
  }



  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact__body">
          <Address />
          <SendEmailForm
            formState={formState}
            SetFormState={SetFormState}
            formError={formError}
            messageFromServer={messageFromServer}
            validateForm={validateForm} />
        </div>
      </div>
    </div >
  )
}
export default Contact