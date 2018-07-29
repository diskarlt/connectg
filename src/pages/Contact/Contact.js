import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.moveScroll();
    }

    componentWillUnmount(){
        scroller.scrollTo("top", {
            duration: 0,
            delay: 0,
            smooth: false});
    }

    moveScroll() {
        let id = this.props.match.params.id;
        if(id === undefined || id === "contract") {
            scroll.scrollToTop();
        }
        else {
            scroller.scrollTo(id, {
                duration: 1000,
                delay: 100,
                smooth: true});
        }
    }

    render() {
        this.moveScroll();        
        return (
            <div>
                <Element name="top" className="element"/>
                <Element name="visit" className="element">
                    <img src={require('./contact_1.jpg')}/>
                    <table cellpadding="0" cellspacing="0" width="460"> <tr> <td style={{border: '1px solid #cecece'}}>
                    <a href="https://map.naver.com/?searchCoord=78fd5510b6e196d727a1e56aedd180b8a7bc901b9d89adf635cf50b8b4c72625&query=7YyM7YGs65%2Bw&tab=1&lng=764d750d3b5e9cb0a4ea0b560ac5abf3&mapMode=0&mpx=73355623c3d45e11a16b751fb76561da3b791c310262844ef645242e57880f1d663b745f3ce43534ce60b0b12d54dfddd79967adb8f68714956fffcd010478b0&lat=4dcf45e077a7071edc95135e378c366b&dlevel=12&enc=b64&menu=location" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1532847549839_2094278038" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style={{verticalAlign: 'top'}}/></a></td> </tr> 
                    <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style={{paddingLeft:'9px', borderLeft:'1px solid #cecece', borderBottom:'1px solid #cecece'}}> 
                    <span style={{fontFamily: 'tahoma', fontSize: '11px', color:'#666'}}>2018.7.29</span>&nbsp;<span style={{fontSize: '11px', color:'#e5e5e5'}}>|</span>&nbsp;<a style={{fontFamily: 'dotum,sans-serif', fontSize: '11px', color:'#666', textDecoration: 'none', letterSpacing: '-1px'}} href="https://map.naver.com/?searchCoord=78fd5510b6e196d727a1e56aedd180b8a7bc901b9d89adf635cf50b8b4c72625&query=7YyM7YGs65%2Bw&tab=1&lng=764d750d3b5e9cb0a4ea0b560ac5abf3&mapMode=0&mpx=73355623c3d45e11a16b751fb76561da3b791c310262844ef645242e57880f1d663b745f3ce43534ce60b0b12d54dfddd79967adb8f68714956fffcd010478b0&lat=4dcf45e077a7071edc95135e378c366b&dlevel=12&enc=b64&menu=location" target="_blank">지도 크게 보기</a> 
                    </td> <td width="98" bgcolor="#f9f9f9" align="right" style={{textAlign:'right', paddingRight:'9px', borderRight:'1px solid #cecece', borderBottom:'1px solid #cecece'}}> 
                    <span style={{float:'right'}}><span style={{fontSize:'9px', fontFamily:'Verdana, sans-serif', color:'#444'}}>&copy;&nbsp;</span>&nbsp;
                    <a style={{fontFamily:'tahoma', fontSize:'9px', fontWeight:'bold', color:'#2db400', textDecoration:'none'}} href="http://www.nhncorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>
                </Element>
                <Element name="call" className="element">
                    <img src={require('./contact_1.jpg')}/>
                </Element>
                <Element name="discord" className="element">
                    <img src={require('./contact_1.jpg')}/>
                </Element>                
            </div>
        );
    }
}


export default Contact;