import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/Example/SectionBasics.jsx";
import SectionNavbars from "./Sections/Example/SectionNavbars.jsx";
import SectionTabs from "./Sections/Example/SectionTabs.jsx";
import SectionPills from "./Sections/Example/SectionPills.jsx";
import SectionNotifications from "./Sections/Example/SectionNotifications.jsx";
import SectionTypography from "./Sections/Example/SectionTypography.jsx";
import SectionJavascript from "./Sections/Example/SectionJavascript.jsx";
import SectionCarousel from "./Sections/Example/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/Example/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/Example/SectionLogin.jsx";
import SectionExamples from "./Sections/Example/SectionExamples.jsx";
import SectionDownload from "./Sections/Example/SectionDownload.jsx";

import SectionProgamer from "./Sections/SectionProgamer.jsx";
import SectionCommunication from "./Sections/SectionCommunication.jsx";
import SectionMedical from "./Sections/SectionMedical.jsx";
import SectionCreator from "./Sections/SectionCreator.jsx";
import SectionCaster from "./Sections/SectionCaster.jsx";
import SectionCoach from "./Sections/SectionCoach.jsx";
import SectionContact from "./Sections/SectionContact.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div id="AppComponents">
        <Header
          brand="Connect G"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Connect G.</h1>
                  <h3 className={classes.subtitle}>
                    게임으로 세계를 연결하다.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionProgamer />
          <SectionCommunication />
          <SectionMedical />
          <SectionCreator />
          <SectionCaster />
          <SectionCoach />
          <SectionContact />
          <div className={classes.footImage}/>
        </div>
        <Footer />
      </div>
    );
  }
}

/*
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
*/

export default withStyles(componentsStyle)(Components);
