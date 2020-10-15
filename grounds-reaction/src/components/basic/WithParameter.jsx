import React from 'react'

export default function WithParameter(params) {      
    const status = params.score >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{params.title}</h2>
            <p>
                <strong>{params.student} </strong>
                <br/>
                tem nota 
                <strong> {params.score} </strong>
                <br/>
                e está 
                <strong> {status}</strong>!
            </p>
        </div>
    )
}