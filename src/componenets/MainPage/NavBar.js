import React from 'react'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles=makeStyles({
    bar:{
        paddingTop:"0.5rem",
        backgroundColor:"#fff",
        //['@media (max-width:780px)']:{
        //    flexDirection:"column"
        //}
        display:'flex',
        justifyContent:'flex-end',
        width:'40%'
    },
    menuItem:{
        cursor:"pointer",
        flexGrow:1,
        "&:hover":{
            color:"#4f25c8"
        },
        ['@media (max-width:780px)']:{
            paddingBottom:"1rem"
        },
        margin : "5px",
        float:'left',
    },

})


function NavBar() {
    const classes =styles()
    return (
            <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
                <Typography varient="h6" className={classes.menuItem}>
                    향수 검색
                </Typography>
                <Typography varient="h6" className={classes.menuItem}>
                    중고 판매
                </Typography>
                <Typography varient="h6" className={classes.menuItem}>
                    커뮤니티
                </Typography>
                <Typography varient="h6" className={classes.menuItem}>
                    마이페이지
                </Typography>
            </Toolbar>
        
    )
}

export default NavBar

