import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import image from "assets/img/profile-bg.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import AuthService from '../../helper/auth';
import withAuth from '../../config/constants';
const Auth = new AuthService();


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Dashboard: true,
      Transaction: false,
      FundCash: false
    }
  }
  

  handleLogout() {
    Auth.logout()
    this
      .props
      .history
      .replace('/login');
  }

  toggleDashboard(){
    this.setState({
      Dashboard: true,
      Transaction: false,
      FundCash: false
    })
  }
  

  toggleTransaction(){
    this.setState({
      Dashboard: false,
      Transaction: true,
      FundCash: false
    })
  }

  toggleFundCash() {
    this.setState({
      Dashboard: false,
      Transaction: false,
      FundCash: true
    })
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Shomolu.com"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className="row" style={{ width: '100%' }}>
            <GridItem style={{ height: '100vh', display: 'flex', paddingTop: '70px'}}>
              <GridItem xs={3} style={{ height: '100%', color: 'white', textTransform : 'Capitalize'}}>
                <div style={{ height: '25%', paddingTop: '2rem'}}>
                  <h3>
                    namemy namemy
                  </h3>
                </div>
                <div style={{ height: '60%' }}>
                  <Button color="light" simple style={{ fontSize: '17px' }}>Dashboard</Button>
                  <Button color="light" simple style={{ fontSize: '17px' }}>Fund Card</Button>
                  <Button color="light" simple style={{ fontSize: '17px' }}>Transaction</Button>
                  <Button color="light" simple onClick={this.handleLogout} style={{ fontSize: '17px' }}>Sign Out</Button>
                </div>
                <div style={{ height: '15%', paddingBottom: '2rem' }}>
                  <span>
                    namemy namemy
                  </span>
                </div>
              </GridItem>
              <GridItem xs={9} style={{ height: '100%'}}>
                <div style={{ height: '80%', backgroundColor: 'white' }}>
                </div>
                <div style={{ height: '15%', paddingTop: '1rem', paddingBottom: '2rem', position: 'sticky', float: 'right' }}>
                  <span style={{ paddingTop: '2rem', color: 'white', textTransform: 'Capitalize' }}>
                    namemy namemy
                  </span>
                </div>
              </GridItem>
            </GridItem>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(withAuth(ProfilePage));
