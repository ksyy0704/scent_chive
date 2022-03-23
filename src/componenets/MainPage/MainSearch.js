import {React, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import { ClassNames } from '@emotion/react'
import { SearchOutlined } from '@ant-design/icons';
import {EllipsisOutlined } from '@ant-design/icons';


const usestyles=makeStyles({
    searchArea:{
        display: 'flex',
        flexDirection:"row",
        paddingTop:"60px",
        paddingBottom:"110px",
        height:"40%",

    },
    title:{
        fontWeight:"bold",
        fontSize:"50px",
        float:'left',
        width:'20%',
        marginLeft:"20px",
    },
    searchBar: {
        display: "flex",
        height: "100vh",
        width: "70%",
        alignItems: "right",
        flexDirection: "row",
        rowGap: "20px",
        float:'right',
        marginRight:'20px',
        marginTop:'20px',
        height:"40%",

    },
    icon:{
        margin:"20px",
        height:"10px",
        width:"10px",
    }
    
    
})


function MainSearch() {
    const classes =usestyles()
    return (
        <div className={classes.searchArea}>
            <label className={classes.title}>
                센카이브
            </label>
            <div className={classes.searchBar}>
                    <TextField
                        id="outlined-basic"
                        //onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                        size="small"
                    />
                    <SearchOutlined 
                        className={classes.icon}
                    />
                    <EllipsisOutlined 
                        className={classes.icon}
                    />
            </div>
            
        </div>
    );
}

export default MainSearch












