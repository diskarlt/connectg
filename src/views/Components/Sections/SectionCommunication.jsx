import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import managementStyle from "assets/jss/material-kit-react/views/componentsSections/managementStyle.jsx";

class SectionCommunication extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="anchorCommunication" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <h2>글로벌 커뮤니케이션</h2>
              <img className={classes.img} src={require("assets/img/communication.jpg")}/>
              <h4>
                외국인 게임 친구를 통해 자연스러운 글로벌 커뮤니케이션 능력 향상
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(managementStyle)(SectionCommunication);
