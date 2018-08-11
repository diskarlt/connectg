/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { School, Phone } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import { animateScroll as scroll } from 'react-scroll';

function HeaderLinks({ ...props }) {
  const { classes } = props;

  function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollTo(id) {
    var elem = document.getElementById(id);
    var pos = elem.offsetTop;    
    scroll.scrollTo(pos+window.innerHeight-200);
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Management"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={School}
          dropdownList={[
            <a onClick={(e) => scrollTo("anchorProgamer")} className={classes.dropdownLink}>
              프로게이머
            </a>,
            <a onClick={(e) => scrollTo("anchorCommunication")} className={classes.dropdownLink}>
              글로벌 커뮤니케이션
            </a>,
            <a onClick={(e) => scrollTo("anchorMedical")} className={classes.dropdownLink}>
              부상 및 건강 관리
            </a>,
            <a onClick={(e) => scrollTo("anchorCreator")} className={classes.dropdownLink}>
              크리에이터
            </a>,
            <a onClick={(e) => scrollTo("anchorCaster")} className={classes.dropdownLink}>
              게임 해설가
            </a>,
            <a onClick={(e) => scrollTo("anchorCoach")} className={classes.dropdownLink}>
              게임 코치
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={(e) => scrollTo("anchorContact")}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Phone className={classes.icons} /> Contact
        </Button>
      </ListItem>      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/connectg"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/connectg"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/connectg"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
