import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
    return (
        <div>            
			<div className='Menu no-scroll'>
				<div className='Menu-logo-base'>
					<NavLink to="/" className='Menu-link'>
						<div className='Menu-logo'>ConnectG</div>
					</NavLink>
				</div>
				<ul className="Menu-main">
					<li>
						<NavLink to="/about" className="Menu-title Menu-link"> 회사소개 </NavLink>
					</li>
					<li>
						<NavLink to="/manage" className="Menu-title Menu-link"> 매니지먼트 분야 소개 </NavLink>
						<ul className="Menu-child">
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
						<NavLink to="/contact" className="Menu-title Menu-link"> 상담문의 </NavLink>
						<ul className="Menu-child">
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
						<NavLink to="/partner" className="Menu-title Menu-link"> 파트너쉽 </NavLink>
					</li>            
				</ul>
			</div>
        </div>
    );
};

export default Menu;