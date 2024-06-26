import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hook/useInput';

function LoginInput({ login }) {
const [email, setEmail] = useInput('');
const [password, setPassword] = useInput('');
  
const onSubmitHandler = (event) => {
    event.preventDefault();
  
    login({
      email,
      password,
    });
};

    return (
      <form onSubmit={onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={email} onChange={setEmail} />
        <input type="password" placeholder='Password' value={password} onChange={setPassword} />
        <button>Masuk</button>
      </form>
    );
  }
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;