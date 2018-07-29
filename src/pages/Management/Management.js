import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Management extends React.Component {
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
                <Element name="contract" className="element">
                    <img src={require('./manage_1.jpg')}/>
                </Element>
                <Element name="language" className="element">
                    <img src={require('./manage_2.jpg')}/>
                </Element>
                <Element name="injury" className="element">
                    <img src={require('./manage_1.jpg')}/>
                </Element>
                <Element name="promote" className="element">
                    <img src={require('./manage_2.jpg')}/>
                </Element>
                <Element name="feedback" className="element">
                    <img src={require('./manage_1.jpg')}/>
                </Element>
            </div>
        );
    }
}


export default Management;