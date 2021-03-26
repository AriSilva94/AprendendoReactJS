import React from 'react'
import '../../src/App.css';
import LedVerde from './imgs/led_verde.jpg'
import LedVermelho from './imgs/led_vermelho.png'

export default function Led(props) {
    return (
        <>
            <section className='caixa'>
                <img style={{ width: "50px" }} src={props.ligado ? LedVerde : LedVermelho}></img>
                <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
            </section>
        </>
    );
}
