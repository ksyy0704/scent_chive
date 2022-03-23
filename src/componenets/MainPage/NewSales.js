import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Carousel, {CarouselItem} from "./Carousel";


const usestyles=makeStyles({
    newSalesArea:{
        width:"80%",
        height:"200px",
        float : "left",
        marginLeft:"80px",
        display: 'flex',
        flexDirection:"column",
    },
    newSales:{
        fontSize:"20px",
        fontWeight:"bold",
        float:"left",
    },



})



function NewSales() {
    const classes=usestyles();
    return (
        <div className={classes.newSalesArea}>
            <div>
                <p className={classes.newSales}>새 중고 매물</p>
            </div>
            <div className="App">
                <Carousel>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                </Carousel>
            </div>
        </div>


    )
}

export default NewSales
