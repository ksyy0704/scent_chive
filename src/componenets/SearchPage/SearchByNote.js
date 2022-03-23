
import React, { Component } from "react";
import './TabStyle.css';
import {makeStyles} from '@material-ui/core/styles'
import Accordion from "./Accordion";
import { useSpring, animated } from "react-spring";

// const styles=makeStyles({
//   bar:{
//   }
// })


class SearchByNote extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        //const classes =styles()
        return(

          <div>
            <div className="main">
              <h1 className="noteTitle">탑노트</h1>
                <div className="accordion">
                  <Accordion
                    title="플로럴"
                    text="레드로즈, 티로즈, 다마스크로즈 " />
                  <Accordion
                    title="우디"
                    text="파인우드, 샌달우드, 오우드우드" />
                </div>
              <br/>
              <h1 className="noteTitle">미들노트</h1>
                <div className="accordion">
                  <Accordion
                    title="플로럴"
                    text="레드로즈, 티로즈, 다마스크로즈 " />
                  <Accordion
                    title="우디"
                    text="파인우드, 샌달우드, 오우드우드" />
                </div>
              <br/>
              <h1 className="noteTitle">베이스노트</h1>
                <div className="accordion">
                  <Accordion
                    title="플로럴"
                    text="레드로즈, 티로즈, 다마스크로즈 " />
                  <Accordion
                    title="우디"
                    text="파인우드, 샌달우드, 오우드우드" />
                </div>
                <button className="searchButton">검색</button>
            </div>
          </div>
        )
    }
  }
  
  
  export default SearchByNote;
  