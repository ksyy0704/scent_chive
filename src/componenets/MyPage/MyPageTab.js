import { FormHelperText } from '@material-ui/core'
import React, {Component} from 'react'
import styled from 'styled-components'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import { useState } from 'react'
import './MyPageTabStyle.css'
import PerfumesIBought from './PerfumesIBought';
import MyPostsComments from './MyPostsComments';
import MyBookmark from './MyBookmark';


const menuList={
  0:<PerfumesIBought/>,
  1:<MyPostsComments/>,
  2:<MyBookmark/>,
}

class MyPageTab extends React.Component {
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
                <li className={`${this.state.menu===0? 'active':''}`} onClick={() => this.changeMenu(0)}>구매한 향수</li>
                <li className={`${this.state.menu===1? 'active':''}`} onClick={() => this.changeMenu(1)}>내가 쓴 글/댓글</li>
                <li className={`${this.state.menu===2? 'active':''}`} onClick={() => this.changeMenu(2)}>북마크</li>

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

export default MyPageTab
