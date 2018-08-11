import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionCreator extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="anchorCreator" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>크리에이터</h2>
              <img className={classes.img} src={require("assets/img/creator.jpg")}/>
              <h4>
                영상 제작 /
                컨텐츠 기획 /
                방송 피드백
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionCreator);
