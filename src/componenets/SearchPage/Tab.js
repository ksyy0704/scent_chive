import { FormHelperText } from '@material-ui/core'
import React, {Component} from 'react'
import styled from 'styled-components'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import { useState } from 'react'
import './TabStyle.css'
import SearchByNote from './SearchByNote';
import SearchByDirector from './SearchByDirector';
import SearchByName from './SearchByName';
import SearchByBrand from './SearchByBrand';
import Accordion from "./Accordion";

// const useStyles=makeStyles({
//     tabMenu:{
//         display:'flex',
//         flexDirection:"row",
//         fontWeight:'bold',
//         justifyItems:"center",
//         alignItems:"center",
//         listStyle:"none",
//     },

// })

const menuList={
  0:<SearchByNote/>,
  1:<SearchByName/>,
  2:<SearchByDirector/>,
  3:<SearchByBrand/>,
}

class Tab extends React.Component {
    constructor(props){
      super();
      this.state={
        menu:0,
      };
    }
    changeMenu=(menuIndex)=>{
      this.setState({menu:menuIndex});
    }
    render(){
      return (
        <div className="menuArea">
          <div className="wrap">
            <div className='menuBar'>
              <ul className="tabs">
                <li className={`${this.state.menu===0? 'active':''}`} onClick={() => this.changeMenu(0)}>노트로 검색하기</li>
                <li className={`${this.state.menu===1? 'active':''}`} onClick={() => this.changeMenu(1)}>향수 이름으로 검색하기</li>
                <li className={`${this.state.menu===2? 'active':''}`} onClick={() => this.changeMenu(2)}>조향사로 검색하기</li>
                <li className={`${this.state.menu===3? 'active':''}`} onClick={() => this.changeMenu(3)}>브랜드로 검색하기</li>

              </ul>
            </div>
            <div className="contentArea">
              {menuList[this.state.menu]}
            </div>
          </div>
        </div>
      )
    }
}

export default Tab
