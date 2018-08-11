import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionProgamer extends React.Component {
  innerHTML () {
    return {__html: '<iframe style="border:0; width:100%; height:100%; position: absolute; top:0; left:0" src="https://www.youtube.com/embed/lx8RcDNCLlE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'};
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="anchorProgamer" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>프로게이머</h2>
              <div style={{borderRadius: "6px", position: "relative", width: "100%", paddingBottom: "56.25%", overflow: "hidden"}}>
                        <div dangerouslySetInnerHTML={this.innerHTML()} />
                    </div>
              <h4>
                현재 활동 중인 프로팀에게 직접 과외를 받음으로써 현실적인 조언 및 효율 증대
              </h4>
              <h4>
                경기 분석 및 토론을 통한 역량 강화
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionProgamer);
