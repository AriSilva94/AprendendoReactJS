import React from 'react'
import Dados from './Dados'

export default function Corpo() {
    const yt = 'Youtube';
    const crs = 'Canal';
    
    const teste=()=>{
        return 'Ariovaldo'
    }

    const somar=(v1,v2)=>{
        return v1+v2
    }

    return (
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal</p>
            <p>Ative o sininho e clique no joinha</p>
            <Dados
                canal={teste}
                youtube={yt}
                curso={crs}
                somar={somar}
            ></Dados>
        </section>
    )
}