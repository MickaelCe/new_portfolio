import React, { useState } from 'react';
import { client } from '../../client';
import './Footer.scss';


function Footer() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
    })
  }

  return (
    <footer>
      <h2 className='head-text'>
       <span className='gradient__text'>Let's talk !</span>🤝
      </h2>
      {!isFormSubmitted ? (
        <div className='app__form'>
        <div className='app__form-input'>
          <input type="text" placeholder='Your name' name='name' value={name} onChange={handleChangeInput}/>
          <input type="email" placeholder='Your email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
      <textarea className='p-text'
        placeholder='Your message'
        name="message"
        value={message}
        cols="30"
        rows="10"
        onChange={handleChangeInput}
      />
        <button type='button' className='p-text' onClick={handleSubmit} disabled={formData.name.length === 0 || formData.email.length === 0 || formData.message.length === 0 ? 'disabled' : null }>{loading ? "Sending" : "Send message"}</button>
        </div>)
        :
        (
          <div className='app__form'>
            <h3>
              Thanks you for getting in touch ! 🚀
            </h3>
            <h3>
                ✔️
            </h3>
          </div>

        )}
        <p>Copyright © Mickael Cecen</p>
    </footer>
  )
}

export default Footer