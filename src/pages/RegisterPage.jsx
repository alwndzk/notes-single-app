import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
 
function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if(!error) {
      navigate('/')
    }
  }
 
  return (
    <section className='register-page'>
      <div className='input-register'>
        <h2>Silahkan Daftar Akun Mu Terlebih Dahulu</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>Kembali ke <Link to="/">Masuk</Link></p>
        </div>
    </section>
  )
}
 
export default RegisterPage;