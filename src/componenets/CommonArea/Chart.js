import React, { Component } from 'react'
import {makeStyles} from '@material-ui/core/styles'

// const usestyles=makeStyles({
//     backgroundColor:{
    
//     },
// })


//아래 첫 div 태그에 있던 것 뺌. style={{marginTop:"50px", marginLeft:"50px"}}

function Chart() {
    return (
        <div style={{margin:"auto"}}>
            <div style={{width:"200px", height:"300px"}}>
                <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" 
                    stroke="beige" strokeWidth="20"/>
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="green"
                        strokeWidth="20"
                        strokeDasharray={2*Math.PI*90*0.75}
                    />
                </svg>
                <p>
                        75%
                </p>
            </div>
        </div>
    )
}

export default Chart
