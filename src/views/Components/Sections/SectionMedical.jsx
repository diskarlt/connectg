import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionMedical extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="anchorMedical" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>건강 및 부상 관리</h2>
              <img className={classes.img} src={require("assets/img/medical.jpg")}/>
              <h4>
                게임 스케쥴 관리 /
                도수 치료
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionMedical);