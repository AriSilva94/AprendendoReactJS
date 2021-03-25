import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Relogio from './componentes/Relogio'

export default function App() {
  const [num,setNum]=useState(10)
  return (
    <>
      <section className='caixa'>
        <Relogio></Relogio>
        <h1 className='texto'>APRENDENDO REACT</h1>
        <h2>Curso de React</h2>
        <p className='texto3'>Dando início aos estudos em react</p>
        <a href='#' target='_blank'>Testando customização css</a>
        <br></br>
        <p>Valor do state num: {num}</p>
        <button onClick={()=>setNum(100)}>Soma 10</button>
      </section>
    </>
  );
}
