
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
import StarIcon from '@mui/icons-material/Star';
import green from "@material-ui/core/colors/green";


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
        marginTop:"10px",
    },
    writeReview:{
        display:'flex',
    },
    profilePictureBox:{
        width:"10%",
        height:"10%",
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
        display:"flex",
    },
    newCommentArea:{
        display:"flex",
        flexDirection:"column",
        marginLeft:"10px",
    },
    othersComments:{
        display:"flex",
        marginTop:"10px",
        marginBottom:"10px",
        
    },
    commentInfoArea:{
        display:"flex",
        flexDirection:"row",
        width:"85%",
    },
    othersCommentsArea:{
        display:"flex",
        flexDirection:"column",
        width:"85%",
        marginLeft:"10px",
    },
    commentWords:{
        textAlign:"justify",
        marginTop : "10px",

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
                    <div>다른 사람들의 평점</div>
                    <StarIcon style={{color:"green"}} sx={{fontSize:250}}/>

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
                    <div className={classes.newCommentArea}>
                        <div className={classes.userName}>눈송이</div>
                        <div>
                            <textarea rows={5} cols={95}/>
                            <button>확인</button>
                        </div>
                    </div>
                </div>
                <div className={classes.othersComments}>
                    <div className={classes.profilePictureBox}>
                        <img src={profilePic} className={classes.profilePicture} alt="프로필사진"/>
                    </div>
                    <div className={classes.othersCommentsArea}>
                        <div className={classes.commentInfoArea}>
                            <div className={classes.userName}>눈송대마왕</div>
                            <div className={classes.commentDate}>2021년 12월 01일(수정됨)</div>
                            <button>신고</button>
                        </div>
                        <div className={classes.commentWords}>
                            엄청 달콤합니다. 야쿠르트 향이 나는데 겨울에 쓰기 딱 좋습니다.
                        </div>
                    </div>
                </div>
                <div className={classes.othersComments}>
                    <div className={classes.profilePictureBox}>
                        <img src={profilePic} className={classes.profilePicture} alt="프로필사진"/>
                    </div>
                    <div className={classes.othersCommentsArea}>
                        <div className={classes.commentInfoArea}>
                            <div className={classes.userName}>불꽃대마왕</div>
                            <div className={classes.commentDate}>2022년 01월 08일</div>
                            <button>신고</button>
                        </div>
                        <div className={classes.commentWords}>
                            명성이 자자해서 구매해 봤는데 개인적으로는 별로에요 요구르트향보다 치과 냄새가 더 강해요
                            이거 뿌리면 이 썩는 듯한 기분이 들어요
                            겨울에 히터 있는 곳에서 뿌리면 속 안 좋아질 것 같아요 꼭 시향해보고 신중하게 구매하세요.
                            참고로 저는 비누향, 허브향 좋아합니다.
                        </div>
                    </div>
                </div>
                <div className={classes.othersComments}>
                    <div className={classes.profilePictureBox}>
                        <img src={profilePic} className={classes.profilePicture} alt="프로필사진"/>
                    </div>
                    <div className={classes.othersCommentsArea}>
                        <div className={classes.commentInfoArea}>
                            <div className={classes.userName}>제비꽃돼지</div>
                            <div className={classes.commentDate}>2022년 02월 05일(수정됨)</div>
                            <button>신고</button>
                        </div>
                        <div className={classes.commentWords}>
                            위시리스트에 2년이나 있었던 향수에요.
                            이번 설날에 받은 세뱃돈 탈탈 털어서 드디어 구매했습니다. 행복해요!!
                            바틀도 예쁘고 향도 달달하니 최곱니다.
                            35ml로 살까 고민하다가 그냥 70ml로 샀는데 역시 향수는 대용량이 최고에요 *_*
                            강추합니다!
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
    // }
}
  
  
  export default PerfumeResult;
  