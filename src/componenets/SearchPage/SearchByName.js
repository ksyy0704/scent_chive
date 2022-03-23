
import React, { Component } from "react";
import './TabStyle.css';
import SearchBar from "../CommonArea/SearchBar";
// import AngelsShare from "../src/img/Angels Share.jpg";
// import BaccaratRouge540Extrait from "../img/Baccarat Rouge540 Extrait.jpg";
// import BaccaratRouge540 from "../img/BaccaratRouge540.jpg";
// import ChanceEauTendre from "../img/ChanceEauTendre";
// import Delina from "../img/Delina.jpg";
// import MyWay from "../img/MyWay.jpg";
// import PortraitOfALady from "../img/PortraitOfALady";


import profilePic from './../MainPage/MainPageImg/ProfilePic.png'


class SearchByName extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 1,
      };
    }

    render(){
        return(
          <div>
            <div>향수 이름을 입력하세요</div>
            <SearchBar/>
            <div className="searchImgContainer">
              <img className="searchImg" alt="BaccaratRouge540" src="img/Baccarat Rouge540.jpg"/>
              <img className="searchImg" alt="BaccaratRouge540 Extrait" src="img/Baccarat Rouge540 Extrait.jpg"/>
              <img className="searchImg" alt="Angel's Share" src="img/Angels Share.jpg"/>
              <img className="searchImg" alt="Chance Eau Tendre" src="img/Chance Eau Tendre.jpg"/>
              <img className="searchImg" alt="Delina" src="img/Delina.jpg"/>
              <img className="searchImg" alt="My Way" src="img/My Way.jpg"/>
              <img className="searchImg" alt="Portrait of a Lady" src="img/Portrait of a Lady.jpg"/>




            </div>
          </div>


        )
    }
  }
  
  
  export default SearchByName;
  