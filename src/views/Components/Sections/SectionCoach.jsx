import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionCoach extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="anchorCoach" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>게임 코치 및 교육자</h2>
              <img className={classes.img} src={require("assets/img/coach.jpg")}/>
              <h4>
                게임 분석 연습 /
                게임 코칭 연습 /
                교육자 과정 준비
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionCoach);
