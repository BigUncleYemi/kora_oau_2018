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
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
import image from "assets/img/profile-bg.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import AuthService from '../../helper/auth';
import withAuth from '../../config/constants';
import Bucket from './Bucket'
const Auth = new AuthService();


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Dashboard: true,
      Transaction: false,
      FundCash: false
    }
    this.toggleDashboard = this.toggleDashboard.bind(this);
    this.toggleFundCash = this.toggleFundCash.bind(this);
    this.toggleTransaction = this.toggleTransaction.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  

  handleLogout() {
    Auth.logout()
    this
      .props
      .history
      .replace('/');
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
    const {Transaction, FundCash, Dashboard} = this.state;
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
            <GridItem style={{ height: '89vh', display: 'flex', paddingTop: '70px'}}>
              <GridItem xs={3} style={{ height: '100%', color: 'white', textTransform : 'Capitalize'}}>
                <div style={{ height: '25%', paddingTop: '2rem'}}>
                  <h3>
                    Bola Bankola
                  </h3>
                </div>
                <div style={{ height: '27%', display: 'inline-grid' }}>
                  <Button color="light" simple onClick={this.toggleDashboard} style={{ fontSize: '17px' }}>Dashboard</Button>
                  <Button color="light" simple onClick={this.toggleFundCash} style={{ fontSize: '17px' }}>Bucket</Button>
                  <Button color="light" simple onClick={this.toggleTransaction} style={{ fontSize: '17px' }}>Pending Bucket</Button>
                  <Button color="light" simple onClick={this.handleLogout} style={{ fontSize: '17px' }}>Sign Out</Button>
                </div>
              </GridItem>
              <GridItem xs={9} style={{ height: '100%'}}>
                {Dashboard === true && 
                <div style={{ height: '80%', paddingTop: '2rem', backgroundColor: 'white' }}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2>Bola foods</h2>
                  </CardHeader>
                    <CardBody >
                      <p>Amount</p>
                      <span>$0</span>
                    </CardBody>
                    </div>}
                {FundCash === true && <div style={{ height: '80%', backgroundColor: 'white' }}>
                  <Bucket rowHeaders={['Customer', 'Amount', 'Date']} rows={['','','']} />
                </div>}
                { Transaction === true && <div style={{ height: '80%', backgroundColor: 'white' }}>
                  <Bucket rowHeaders={['Customer', 'Amount', 'Date']} rows={['','','']}/>
                </div>}
              </GridItem>
            </GridItem>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
