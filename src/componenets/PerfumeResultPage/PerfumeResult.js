
import React, { Component } from "react";
// import './PerfumeResult.css';
import {makeStyles} from '@material-ui/core/styles'
import SearchBar from "../CommonArea/SearchBar";
import profilePic from './../MainPage/MainPageImg/ProfilePic.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
//import Grid from '@mui/material/Grid';
import { Grid } from '@mui/material';
import Chart from '../CommonArea/Chart';
import StarRating from '../CommonArea/StarRating';
//커밋 테스트2


const usestyles=makeStyles({
    // searchArea:{
    //     display: 'flex',
    //     flexDirection:"row",
    //     paddingTop:"0px",
    //     paddingBottom:"110px",
    //     //height:"40%",
    //     width:"100%",
    //     height:"100px",

    // },

    // },
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
    // icon:{
    //     margin:"20px",
    //     height:"10px",
    //     width:"10px",
    // },
    ContentsArea:{
        //리뷰를 포함한 모든 정보 박스
        display: 'flex',
        flexDirection:"column",
        width: "80%",
        rowGap: "10px",
        margin:"auto",
    },
    PerfumeResultArea:{
        //리뷰를 제외한 향수 정보 부분 박스
        display:"flex",
        flexDirection:"column",
        width:"90%",
        float : "center",
        textAlign:"center",
        
    },
    PerfumeResultImgContainer:{
        width: "100%",
    },
    PerfumeResultImg:{
        width: "300px",
        height:"300px",
        objectFit: "contain",
    },
    PerfumeBrandYear:{
        float:"center",
        textAlign:"right",
        display:"flex",
        flexDirection:"column",
    },
    PerfumeBookmark:{
        float:"right",
        display:"flex",
        alignItems:"center",  //수직 중앙 정렬
    },
    PerfumeResultName:{
        //향수 이름 서식
        textAlign:"center",
        float:"center",
    },
    PerfumeTitleArea:{
        //북마크, 이름, 년도, 북마크
        display:"flex",
        //flexDirection:"column",
    },
    gridLayout:{
        display:"flex",
        alignItems:"center",  //수직 중앙 정렬
        margin:"0px auto",
    },
    ItemLayout:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",   
    },
    userReviewArea:{
        //이용자 시향 후기 박스
        display: 'flex',
        flexDirection:"column",
        width: "80%",
        rowGap: "10px",
        margin:"auto",
    },
    writeReview:{
        display:'flex',
    },
    profilePictureBox:{
        width:"5%",
        height:"5%",
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
        float:"left",
    },
    
    


    
})


    
function PerfumeResult(){
    const classes =usestyles()
    return(
        <div className={classes.ContentsArea}>
            <div className={classes.SearchBar}>
                <SearchBar/>
            </div>

            <div className={classes.PerfumeTitleArea}>
                <div className={classes.PerfumeResultArea}>
                    <div className={classes.PerfumeResultName}>Baccarat Rouge 540 Extrait de Parfum</div>
                    <div className={classes.PerfumeBrandYear}>
                        <div>Maison Francis Kurkdjian</div>
                        <div>2017</div>
                    </div>
                </div>
                <div className={classes.PerfumeBookmark}><StarOutlineIcon/></div>
            </div>

            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 5, md: 8 }}>
                <Grid item xs={6}>
                    <img className={classes.PerfumeResultImg} alt="BaccaratRouge540" src="img/Baccarat Rouge540.jpg"/>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.ItemLayout}>
                        <div>탑노트</div>
                        <div>미들노트</div>
                        <div>베이스노트</div>
                        <div>조향사 : Francis Kurkdjian</div>
                    </div>      
                </Grid>
                <Grid item xs={6} >
                    <div>
                        <div>나와 맞을 확률</div>
                        <div className={classes.gridLayout}>
                            <Chart/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} >
                    4
                </Grid>
                <Grid item xs={12}>
                    <StarRating/>
                </Grid>
            </Grid>

            <div>
                이용자 시향 후기
            </div>

            <div className={classes.userReviewArea}>
                <div className={classes.writeReview}>
                    <div className={classes.profilePictureBox}>
                        <img src={profilePic} className={classes.profilePicture} alt="프로필사진"/>
                    </div>
                    <div className={classes.namePostsComments}>
                    </div>


                    <div className={classes.userName}>눈송이</div>
                    <textarea rows={5} cols={80}/>
                    <button>확인</button>
                </div>

            </div>



        </div>
    )
    // }
}
  
  
  export default PerfumeResult;
  