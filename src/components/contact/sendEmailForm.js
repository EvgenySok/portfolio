import React from 'react'

const SendEmailForm = ({ formState, SetFormState, formError, validateForm ,messageFromServer}) => {
  return (
    <div className="send-email">
      <div className="user-info">
        <div className="form-group">
          <input
            className="input-style"
            type="text"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) => SetFormState({ ...formState, name: e.target.value })}
          />
          <div className={`validate ${formError.name ? "active" : ""}`}>Please enter at least 4 chars</div>
        </div>
        <div className="form-group" >
          <input
            className="input-style"
            type="text"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) => SetFormState({ ...formState, email: e.target.value })}
          />
          <div className={`validate ${formError.email ? "active" : ""}`}>Please enter a valid email</div>
        </div>
      </div>
      <div className="form-group" >
        <input
          className="input-style"
          type="text"
          placeholder="Subject"
          value={formState.subject}
          onChange={(e) => SetFormState({ ...formState, subject: e.target.value })}
        />
        <div className={`validate ${formError.subject ? "active" : ""}`}>Please enter at least 8 chars of subject</div>
      </div>
      <div className="form-group" >
        <textarea
          className="input-style textarea-style"
          rows="12"
          type="text"
          placeholder="Message"
          value={formState.message}
          onChange={(e) => SetFormState({ ...formState, message: e.target.value })}
        />
        <div className={`validate ${formError.message ? "active" : ""}`}>Please write something for us</div>
      </div>

      <div className="message"></div>

      <div className="btn">
        <button className="btn-send" onClick={validateForm}>Send message</button>
      </div>
    </div >
  )
}
export default SendEmailForm