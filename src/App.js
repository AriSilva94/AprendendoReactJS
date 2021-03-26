import React, { useState } from 'react'
import Relogio from './componentes/Relogio'
import Led from './componentes/Led'

export default function App() {
  const [num, setNum] = useState(10)
  const [ligado, setLigado] = useState(false)
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
        <button onClick={() => setNum(100)}>Soma 10</button>
        <br></br>
        <Led ligado={ligado} setLigado={setLigado}></Led>
      </section>
    </>
  );
}
