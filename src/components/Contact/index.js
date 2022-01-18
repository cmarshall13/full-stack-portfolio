import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

    return (
        <div className="row">
        <h3 className='header'>Contact </h3>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m6 l6">
              <input id="first_name" type="text" className="validate white-text" name='name' onBlur={handleChange}/>
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 l6">
              <input id="email" type="email" className="validate white-text" name='email' onBlur={handleChange}/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
            <textarea name='message' id="textarea1" className="" onBlur={handleChange}></textarea>
            <label htmlFor="textarea1">Message</label>
            </div>
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          )}
          <div className='row'>
            <button className="btn waves-effect waves-light black-text" type="submit" name="action">Submit
            </button>
          </div>
          
        </form>
      </div>
    )
}

export default Contact