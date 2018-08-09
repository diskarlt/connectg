import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
	Button,
	Collapse,
	Navbar,	NavbarToggler, NavbarBrand,	Nav, NavItem, NavLink,
	UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Modal, ModalHeader, ModalBody, ModalFooter,	
} from 'reactstrap';

import './AppNav.css';

class AppNav extends React.Component {
	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleVisit = this.toggleVisit.bind(this);
		this.toggleCall = this.toggleCall.bind(this);
		this.toggleDiscord = this.toggleDiscord.bind(this);
		this.state = {
			isOpen: false,
			modalVisit: false,
			modalCall: false,
			modalDiscord: false,
		};
	}

	toggleMenu() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toggleVisit() {
		this.setState({
			modalVisit: !this.state.modalVisit
		})
	}

	toggleCall() {
		this.setState({
			modalCall: !this.state.modalCall
		})
	}

	toggleDiscord() {
		this.setState({
			modalDiscord: !this.state.modalDiscord
		})
	}

	componentDidMount() {
		console.log(this.props.match);
	}

	render() {
		return (
			<div className="bg-dark">
				<div className="App-Nav">
					<Navbar color="dark" dark expand="md">
						<NavbarBrand to="/" tag={RRNavLink}>ConnectG</NavbarBrand>
						<NavbarToggler onClick={this.toggleMenu} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>								
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										교육과정
									</DropdownToggle>
									<DropdownMenu left className="bg-dark">
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink to="/management/contract" tag={RRNavLink}>프로게이머</NavLink>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink to="/management/language" tag={RRNavLink}>커뮤니케이션</NavLink>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink to="/management/contract" tag={RRNavLink}>크리에이터</NavLink>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink to="/management/contract" tag={RRNavLink}>게임해설</NavLink>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink to="/management/contract" tag={RRNavLink}>게임교육</NavLink>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										상담문의
									</DropdownToggle>
									<DropdownMenu left className="bg-dark">
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink onClick={this.toggleVisit}>방문 상담</NavLink>	
											<Modal isOpen={this.state.modalVisit} toggleVisit={this.toggleVisit} className={this.props.className}>
												<ModalHeader toggleVisit={this.toggleVisit}>오시는 길</ModalHeader>
												<ModalBody>
													<table cellpadding="0" cellspacing="0" width="460"> <tr> <td style={{border: '1px solid #cecece'}}>
													<a href="https://map.naver.com/?searchCoord=78fd5510b6e196d727a1e56aedd180b8a7bc901b9d89adf635cf50b8b4c72625&query=7YyM7YGs65%2Bw&tab=1&lng=764d750d3b5e9cb0a4ea0b560ac5abf3&mapMode=0&mpx=73355623c3d45e11a16b751fb76561da3b791c310262844ef645242e57880f1d663b745f3ce43534ce60b0b12d54dfddd79967adb8f68714956fffcd010478b0&lat=4dcf45e077a7071edc95135e378c366b&dlevel=12&enc=b64&menu=location" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1532847549839_2094278038" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style={{verticalAlign: 'top'}}/></a></td> </tr> 
													<tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style={{paddingLeft:'9px', borderLeft:'1px solid #cecece', borderBottom:'1px solid #cecece'}}> 
													<span style={{fontFamily: 'tahoma', fontSize: '11px', color:'#666'}}>2018.7.29</span>&nbsp;<span style={{fontSize: '11px', color:'#e5e5e5'}}>|</span>&nbsp;<a style={{fontFamily: 'dotum,sans-serif', fontSize: '11px', color:'#666', textDecoration: 'none', letterSpacing: '-1px'}} href="https://map.naver.com/?searchCoord=78fd5510b6e196d727a1e56aedd180b8a7bc901b9d89adf635cf50b8b4c72625&query=7YyM7YGs65%2Bw&tab=1&lng=764d750d3b5e9cb0a4ea0b560ac5abf3&mapMode=0&mpx=73355623c3d45e11a16b751fb76561da3b791c310262844ef645242e57880f1d663b745f3ce43534ce60b0b12d54dfddd79967adb8f68714956fffcd010478b0&lat=4dcf45e077a7071edc95135e378c366b&dlevel=12&enc=b64&menu=location" target="_blank">지도 크게 보기</a> 
													</td> <td width="98" bgcolor="#f9f9f9" align="right" style={{textAlign:'right', paddingRight:'9px', borderRight:'1px solid #cecece', borderBottom:'1px solid #cecece'}}> 
													<span style={{float:'right'}}><span style={{fontSize:'9px', fontFamily:'Verdana, sans-serif', color:'#444'}}>&copy;&nbsp;</span>&nbsp;
													<a style={{fontFamily:'tahoma', fontSize:'9px', fontWeight:'bold', color:'#2db400', textDecoration:'none'}} href="http://www.nhncorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>
												</ModalBody>
												<ModalFooter>
													<Button color="secondary" onClick={this.toggleVisit}>닫기</Button>
												</ModalFooter>
											</Modal>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink onClick={this.toggleCall}>전화 상담</NavLink>	
											<Modal isOpen={this.state.modalCall} toggleCall={this.toggleCall} className={this.props.className}>
												<ModalHeader toggleCall={this.toggleCall}>전화 상담</ModalHeader>
												<ModalBody>
													<div>
														각자 자신에게 맞춘 교육 상담과 진로 컨설팅까지 실시간으로 상담 및 문의가 가능합니다.
													</div>
													<div style={{marginBottom: '10px'}}>
														강의시간 및 개강일 정보를 기준으로 수강료 정보를 실시간으로 상담해드리고 있습니다.
													</div>													
													<div>														
														<h5> 
															<img src={require('./call.png')} alt="Phone" style={{width: '32px', height: '32px'}} />
															{' '}
															02-1234-5678
														</h5>
													</div>
												</ModalBody>
												<ModalFooter>
													<Button color="secondary" onClick={this.toggleCall}>닫기</Button>
												</ModalFooter>
											</Modal>
										</DropdownItem>
										<DropdownItem className="bg-dark" color="dark" dark>
											<NavLink onClick={this.toggleDiscord}>Discord</NavLink>	
											<Modal isOpen={this.state.modalDiscord} toggleDiscord={this.toggleDiscord} className={this.props.className}>
												<ModalHeader toggleDiscord={this.toggleDiscord}>
													<img src={require('./Discord-Logo-Color.png')} alt="Discord" style={{width: '52px', height: '52px'}} />	
													Discord
												</ModalHeader>
												<ModalBody>
													<div>
														언제든지 Discord 채널을 통해 상담가능합니다!
													</div>
													<Button href="https://discord.gg/ABCDEF">https://discord.gg/ABCDEF</Button>
												</ModalBody>
												<ModalFooter>
													<Button color="secondary" onClick={this.toggleDiscord}>닫기</Button>
												</ModalFooter>
											</Modal>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>									
									<NavLink to="/partnership/" tag={RRNavLink}>제휴</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
		  </div>
		);
	}
};

export default AppNav;