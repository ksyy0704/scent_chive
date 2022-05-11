
import React, { Component } from "react";
import './MyPageTabStyle.css';
import SearchBar from "../CommonArea/SearchBar";
import styled from "styled-components";


class MyPostsComments extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 1,
      };
    }

    render(){
        return(
          <div>
            <div>내가 쓴 글/댓글</div>
            
          </div>


        )
    }
  }
  
  
  export default MyPostsComments;
  