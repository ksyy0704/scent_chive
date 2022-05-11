
import React, { Component } from "react";
import {makeStyles} from '@material-ui/core/styles'
import SearchBar from "../CommonArea/SearchBar";
//import Grid from '@mui/material/Grid';
import { Grid } from '@mui/material';
import MyPageTab from "../MyPage/MyPageTab";


const usestyles=makeStyles({

    searchBar: {
        display: "flex",
        //height: "100vh",
        width: "80%",
        alignItems: "center",
        flexDirection: "row",
        rowGap: "20px",
        float:'center',
        marginTop:'20px',
        height:"40%",
    },
    ContentsArea:{
        //모든 정보가 들어있는 곳
        display: 'flex',
        flexDirection:"column",
        width: "80%",
        rowGap: "10px",
        margin:"auto",
    },
    
})
  

function MyPageMain(){
    const classes =usestyles()
    return(
        <div className={classes.ContentsArea}>
            <div className={classes.SearchBar}>
                <SearchBar/>
            </div>
            <div>
                <MyPageTab/>
            </div>
        </div>
    )
    // }
}
  
  
  export default MyPageMain;
  