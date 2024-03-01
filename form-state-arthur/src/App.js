import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cadastrarUsuario = (event) =>{
    event.preventDefault();
    
    alert(`Nome: ${name}, Email: ${email}, Senha: ${password}`)
  }

  return (
    <div className="App">     
      <form className='form' onSubmit={cadastrarUsuario}>
        <h1 className='form__title'>Formulário de Cadastro</h1>
        <div className='wrapper-input'>
          <div className='form__input'>
            
            <label>Digite seu nome</label>
            <input type='text' required value={name} 
            onChange={(event) => {setName(event.target.value)}}/>

          </div>
          <div className='form__input'>

            <label>Digite seu e-mail</label>
            <input type='email' required value={email} 
            onChange={(event) => {setEmail(event.target.value)}}/>

          </div>
          <div className='form__input'>

            <label>Digite sua senha</label>    
            <input type='password' required value={password} 
            onChange={(event) => {setPassword(event.target.value)}}/>

          </div>
        </div>
        <button className='form__button-submit' type='submit'>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
