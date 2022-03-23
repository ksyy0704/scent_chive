import styled from "styled-components";
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


const styles=makeStyles({
   imgStyle:{
       width:"65%",
       height:"200px",
       float : "left",
       marginLeft:"80px",
   }
})

function Slide({img}) {
    const classes =styles()
    return (
        <img src={img} className={classes.imgStyle}/>
    );
}

export default Slide
