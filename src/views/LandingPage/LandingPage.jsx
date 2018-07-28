import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import ScrollableAnchor from 'react-scrollable-anchor';

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Shomolu.com"
          rightLinks={< HeaderLinks />}
          fixed
          changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
          {...rest}/>
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Let Your Transaction Start With Us.</h1>
                <h4>
                  Protecting your card and providing an alternative is what we do.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ScrollableAnchor id={'About'}>
              <ProductSection/>
            </ScrollableAnchor>
            <TeamSection/>
            <WorkSection/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
