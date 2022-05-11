
import React, { Component } from "react";
import './MyPageTabStyle.css';
import SearchBar from "../CommonArea/SearchBar";
import styled from "styled-components";
 

class MyBookmark extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 2,
      };
    }

    render(){
        return(
          <div>
            <div>북마크</div>
            
          </div>


        )
    }
  }
  
  
  export default MyBookmark;
  