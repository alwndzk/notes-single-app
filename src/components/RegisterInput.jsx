import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hook/useInput';

function RegisterInput({ register }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [definePassword, setDefinePassword] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(password !== definePassword){
      return alert('Password mu tidak sesuai, pastikan lagi password mu')
    }

    register({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>
      <input type="text" placeholder="Nama" value={name} onChange={setName} />
      <input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={setPassword} />
      <input type="password" placeholder="Confirm Password" value={definePassword} onChange={setDefinePassword} />
      <button>Daftar</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
