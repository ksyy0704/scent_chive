import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import profilePic from './../MainPage/MainPageImg/ProfilePic.png'

const styles=makeStyles({
    myInfoArea:{
        float:"right",
        height:"200px",
        width:"20%",
        marginRight:"80px",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
    },
    cluster:{
        display: 'flex',
        flexDirection:"row",
        justifyContent: "center",


    }, 
    //(프로필 사진, 닉네임, 작성글, 작성댓글), (신뢰도, 정보수정) row로 묶기 위한 클러스터
    profilePictureBox:{
        width:"15%",
        height:"15%",
        borderRadius:"70%",
        overflow:"hidden",
    },
    profilePicture:{
        width:"100%",
        height:"100%",
        objectFit:"cover",
    },
    userName:{
        fontSize:"20px",
        fontWeight:"bold",
        float:"left",
    },
    namePostsComments:{
        display: 'flex',
        flexDirection:"column",
        textAlign:"left",
    },
    postsComments:{
        fontSize:"12px",
        float:"",
    },

})

function MyInfo() {
    const classes=styles()
    return (
        <div className={classes.myInfoArea}>
            <div>
                <div className={classes.cluster}>
                    <div className={classes.profilePictureBox}>
                        <img src={profilePic} className={classes.profilePicture} alt="프로필사진"/>
                    </div>
                    <div className={classes.namePostsComments}>
                        <a className={classes.userName}>
                            눈송이
                        </a>
                        <a className={classes.postsComments}>
                            작성글 : 50개 <br/>
                            작성댓글 : 893개
                        </a>
                    </div>
                </div>
                <div className={classes.cluster}>
                    <div>
                        <a>신뢰도 <br/>100%</a>
                    </div>
                    <div>
                        <a>정보 수정</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyInfo
