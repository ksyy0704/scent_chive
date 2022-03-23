import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const usestyles=makeStyles({
    newPostsArea:{
        width:"65%",
        height:"200px",
        float : "left",
        marginLeft:"80px",
        display: 'flex',
        flexDirection:"column",
    },
    newPosts:{
        fontSize:"20px",
        fontWeight:"bold",
        float:"left",

    },
    newPostsCluster:{
        display: 'flex',
        flexDirection:"column",
    },
    newPostsTitles:{
        fontSize:"13px",
        float:"left",
        textAlign:"left",
    },

})


function NewPosts() {
    const classes=usestyles();
    return (
        <div className={classes.newPostsArea}>
            <div>
                <p className={classes.newPosts}>새 글</p>
            </div>
            <div className={classes.newPostsCluster}>
                <p className={classes.newPostsTitles}>향수 다들 어디에 뿌리세요?</p>
                <p className={classes.newPostsTitles}>오늘은 뭐 뿌리셨어요?</p>
                <p className={classes.newPostsTitles}>향수 너무 비싸요</p>
                <p className={classes.newPostsTitles}>향수 그만 좀 사야 하는데;; 이번 달 카드값;;</p>
                <p className={classes.newPostsTitles}>이거 가품인가요?</p>
            </div>
        </div>
    )
}

export default NewPosts
