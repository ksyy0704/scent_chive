
import React, { Component } from "react";
import './MyPageTabStyle.css';
import SearchBar from "../CommonArea/SearchBar";
import styled from "styled-components";
// 표 만들기 with material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


function createData(perfumePic, perfumeName, orderDate, priceAndQuantity, orderStatus, sellerInfo) {
    //향수 사진, 향수 이름, 주문일자, 가격&수량, 주문상태, 판매자 정보(사진은 나중에 주소 받아올 예정)
 return { perfumePic, perfumeName, orderDate, priceAndQuantity, orderStatus, sellerInfo };
}

const rows = [
 createData(<img width="50px" height="50px" style={{marginRight: 20+ 'px'}} src={process.env.PUBLIC_URL + '/img/Le Beau Le parfum.jpg'}></img>, "Le Beau Le parfum", "2022.02.03.", "44,000원(1개)", "구매완료", "kjh0124" ),
 createData(<img width="50px" height="50px" style={{marginRight: 20 + 'px'}} src={process.env.PUBLIC_URL + '/img/Beautiful Magnolia Intense.jpg'}></img>, "Beautiful Magnolia Intense", "2022.02.03.", "84,000원(1개)", "예약중", "abc123" ),
];


class PerfumesIBought extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <div>
            <div style={{textAlign:"left"}}>구매내역</div>
            {/* 구매 내역 표 */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell >상품정보</TableCell>
                    <TableCell >주문일자</TableCell>
                    <TableCell >주문금액&nbsp;(수량)</TableCell>
                    <TableCell >주문 상태</TableCell>
                    <TableCell >판매자 정보</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.number}>
                        {/* <TableCell component="th" scope="row">
                        {row.number}
                        </TableCell> */}
                        <TableCell align="left" >{row.perfumePic}{row.perfumeName}</TableCell>
                        <TableCell align="left">{row.orderDate}</TableCell>
                        <TableCell align="left">{row.priceAndQuantity}</TableCell>
                        <TableCell align="left">{row.orderStatus}</TableCell>
                        <TableCell align="left">{row.sellerInfo}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>





          </div>


        )
    }
  }
  
  
  export default PerfumesIBought;
  