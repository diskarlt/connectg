/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Primary from "components/Typography/Primary.jsx";
// core components
import contactStyle from "assets/jss/material-kit-react/views/componentsSections/contactStyle.jsx";

class SectionContact extends React.Component {
    innerHTML () {        
        return {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3490584113197!2d127.03273281574411!3d37.49968467981043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3fe019f6ee9%3A0x13dba92218acac6!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsl63sgrwx64-ZIO2FjO2XpOuegOuhnCAxNDI!5e0!3m2!1sko!2skr!4v1533914848216" frameborder="0" style="border:0; width:100%; height:100%; position: absolute; top:0; left:0" allowfullscreen></iframe>'};
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="anchorContact" className={classes.section}>
                <div className={classes.container}>
                <GridContainer className={classes.textCenter} justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                    <h2>오시는 길</h2>
                    <div style={{borderRadius: "6px", position: "relative", width: "100%", paddingBottom: "56.25%", overflow: "hidden"}}>
                        <div dangerouslySetInnerHTML={this.innerHTML()} />
                    </div>
                    <h4>
                        서울특별시 강남구 테헤란로 142
                    </h4>
                    </GridItem>
                </GridContainer>
                <br />
                <br />
                <GridContainer className={classes.textCenter} justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                    <h2>전화 상담</h2>
                    <h4>
                        각자 자신에게 맞춘 교육 상담과 진로 컨설팅까지 실시간으로 상담 및 문의가 가능합니다.
                    </h4>
                    <h4>
                        강의시간 및 개강일 정보를 기준으로 수강료 정보를 실시간으로 상담해드리고 있습니다.
                    </h4>                    
                    <Primary>
                        <h1>02-1234-5678</h1>
                    </Primary>                    
                    </GridItem>                    
                </GridContainer>
                <div className={classes.textCenter + " " + classes.sharingArea}>
                    <GridContainer justify="center">
                    <h3>온라인 상담</h3>
                    </GridContainer>
                    <Button color="twitter">
                    <i className={classes.socials + " fab fa-twitter"} /> Tweet
                    </Button>
                    <Button color="facebook">
                    <i className={classes.socials + " fab fa-facebook-square"} /> Facebook
                    </Button>                    
                    <Button color="discord">
                    <i className={classes.socials + " fab fa-discord"} /> Discord
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

export default withStyles(contactStyle)(SectionContact);