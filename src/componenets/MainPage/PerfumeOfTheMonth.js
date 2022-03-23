import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import perfumeImg from "./../MainPage/MainPageImg/PerfumeOfTheMonth.jpg";

// 이달의 향수 사진

const usestyles=makeStyles({
    perfumeArea:{
        display: 'flex',
        flexDirection:"column",
        float:"right",
        width:"20%",
        marginRight:"80px",
        padding:"0",

    },
    perfumeOfTheMonthName:{
        fontSize:"20px",
        fontWeight:"bold",
        float:"center",
    },
    perfumeImgArea:{
        width:"100%",
        float : "center"
        
    },
    perfumeImgStyle:{
        height:"200px",
        width:"150px",
        float:"center",
    }
})
function PerfumeOfTheMonth() {
    const classes =usestyles()
    return (
        <div className={classes.perfumeArea}>
            <p className={classes.perfumeOfTheMonthName}>
                이달의 향수
            </p>
            <div className={classes.perfumeImgArea}>
                <img src={perfumeImg} className={classes.perfumeImgStyle}/>
            </div>
            
        </div>
    );
}

export default PerfumeOfTheMonth

