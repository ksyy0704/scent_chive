import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "./../MainPage/MainPageImg/1.png"; //자신이 원하는 이미지를 import 하세요.
import img2 from "./../MainPage/MainPageImg/2.png";
import img3 from "./../MainPage/MainPageImg/3.png";
import { mergeClasses } from "@material-ui/styles";

//아직 이미지 업로드 안 해서 안 뜨는듯해요.

const styles=makeStyles({
    slideStyle:{
        //width:"50%",
        overflow:"hidden",
        //overflowY:"scroll",
        //넘어간 부분은 안 보이게 처리
    },
    buttonStyle:{
        all:"unset",
        padding:"2em",
    },
    slideContainer:{
        //width:"60%",
        display:flex,

        //이미지 가로 나열
    }
 })


function Slider() {
    const classes=styles();
    const TOTAL_SLIDES = 2;

    const [currentSlide, setCurrentSlide] = useState(0);
    //useState : 가변적인 상태 유지
    const slideRef = useRef(null);
    //useEffect : 리액트 컴포넌트 랜더링이 될 때마다 특정 작업 수행하도록 설정

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { 
            // 더 이상 넘어갈 슬라이드가 없으면 슬라이드 초기화
        setCurrentSlide(0);
        } else {
        setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
        } else {
        setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듦.
  }, [currentSlide]);

    return (
        <Container className={classes.slideStyle}>
        {currentSlide}
        <SliderContainer ref={slideRef} className={classes.slideContainer}>
            <Slide img={img1} alt="img1" />
            <Slide img={img2} alt="img2"/>
            <Slide img={img3} alt="img3"/>
        </SliderContainer>
        <Button onClick={prevSlide} className={classes.buttonStyle}>Previous Slide</Button>
        <Button onClick={nextSlide} className={classes.buttonStyle}>Next Slide</Button>
        </Container>
    );
}

export default Slider