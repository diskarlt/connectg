import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (      
      <div>        
        <div className='App-nav no-scroll'>
          <div className='App-logo'>
            ConnectG
          </div>
          <ul className="Nav-main">
            <li className="Nav-parent">
              <a href="/about/" className="Nav-title"> 회사소개 </a>
            </li>
            <li>
              <a href="/about/" className="Nav-title"> 매니지먼트 분야 소개 </a>
              <ul className="Nav-child">
                <li>
                  <a>계약 관리</a>
                </li>
                <li>
                  <a>언어교육 관리</a>
                </li>
                <li>
                  <a>부상 관리</a>
                </li>
                <li>
                  <a>홍보 관리</a>
                </li>
                <li>
                  <a>피드백 관리</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about/" className="Nav-title"> 상담문의 </a>
              <ul className="Nav-child">
                <li>
                  <a>방문상담</a>
                </li>
                <li>
                  <a>전화상담</a>
                </li>
                <li>
                  <a>온라인 디스코드 채널 상담</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about/" className="Nav-title"> 파트너쉽 </a>
            </li>            
          </ul>
        </div>
        <div className='App-body'>
          <div> body </div>
        </div>        
      </div>
    );
  }
}

export default App;