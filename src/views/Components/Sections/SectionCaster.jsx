import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionCaster extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="anchorCaster" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>게임 해설가</h2>
              <img className={classes.img} src={require("assets/img/caster.jpg")}/>
              <h4>
                게임 분석 /
                발음 연습 /
                해설 카피 /
                해설 연습 /
                피드백
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionCaster);
