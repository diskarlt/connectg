import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.match);
	}

	render() {
		console.log(this.props.match);
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
							<NavLink to="/about" className="Menu-title Menu-link"> 회사 소개 </NavLink>
						</li>
						<li>
							<NavLink to="/management" className="Menu-title Menu-link"> 매니지먼트 분야 소개 </NavLink>
							<ul className="Menu-child">
								<li>
									<NavLink to="/management/contract" className="Menu-subtitle Menu-link">계약 관리</NavLink>
								</li>
								<li>
									<NavLink to="/management/language" className="Menu-subtitle Menu-link">언어교육 관리</NavLink>
								</li>
								<li>
									<NavLink to="/management/injury" className="Menu-subtitle Menu-link">부상 관리</NavLink>
								</li>
								<li>
									<NavLink to="/management/promote" className="Menu-subtitle Menu-link">홍보 관리</NavLink>
								</li>
								<li>
									<NavLink to="/management/feedback" className="Menu-subtitle Menu-link">피드백 관리</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to="/contact" className="Menu-title Menu-link"> 상담 문의 </NavLink>
							<ul className="Menu-child">
								<li>
									<NavLink to="/contact/visit" className="Menu-subtitle Menu-link">방문 상담</NavLink>
								</li>
								<li>
									<NavLink to="/contact/call" className="Menu-subtitle Menu-link">전화 상담</NavLink>
								</li>
								<li>
									<NavLink to="/contact/discord" className="Menu-subtitle Menu-link">온라인 디스코드 채널 상담</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to="/partnership" className="Menu-title Menu-link"> 파트너쉽 </NavLink>
						</li>
						<li>
							<div className="Menu-footer">
								<div>
									<img className="Menu-footer-img" src={require('./call.png')}/>
									<span>02)0000-0000</span>
								</div>
								<div>								
									<img className="Menu-footer-img" src={require('./Discord-Logo-Color.png')}/>
									<span>https://discord.gg/XXXXXX</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Menu;