import React from 'react'
import Dados from './Dados'

export default function Corpo() {
    const teste = {
        canal: "Ariovaldo",
        youtube: "youtube/Ari",
        curso: "Aprendendo React"
    }
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal</p>
            <p>Ative o sininho e clique no joinha</p>
            <Dados
                canal={teste.canal}
                youtube={teste.youtube}
                curso={teste.curso}
            ></Dados>
        </section>
    )
}