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
        /*paddingTop:"60px",
        paddingBottom:"110px",*/
        width:"100%",
        height:"40%",
        // marginLeft:"10%",
        // marginRight:"10%",
        marginTop:"15px",
        float:"center",

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
        // height: "100vh",
        width: "70%",
        alignItems: "center",
        flexDirection: "row",
        rowGap: "20px",
        // float:'right',
        // marginRight:'20px',
        marginTop:'10px',
        height:"20%",
        margin:"auto",

    },
    icon:{
        margin:"20px",
        height:"10px",
        width:"10px",
    }
    
    
})


function SearchBar() {
    const classes =usestyles()
    return (
        <div className={classes.searchArea}>
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

export default SearchBar












