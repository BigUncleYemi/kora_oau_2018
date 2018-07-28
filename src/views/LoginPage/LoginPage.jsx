import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Link} from "react-router-dom";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
import Phone from "@material-ui/icons/Phone"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";


const Signup = ({classes}) => (
  <form className={classes.form}>
    <CardHeader color="primary" className={classes.cardHeader}>
      <h2>Signup</h2>
    </CardHeader>
    <CardBody>
      <CustomInput
        labelText="First Name..."
        id="first"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "text",
          endAdornment: (
            <InputAdornment position="end">
              <People className={classes.inputIconsColor} />
            </InputAdornment>
          )
        }}
      />
      <CustomInput
        labelText="Phone Name.."
        id="phoneNo"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "text",
          endAdornment: (
            <InputAdornment position="end">
              <Phone className={classes.inputIconsColor} />
            </InputAdornment>
          )
        }}
      />
      <CustomInput
        labelText="User Name..."
        id="userName"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "text",
          endAdornment: (
            <InputAdornment position="end">
              <People className={classes.inputIconsColor} />
            </InputAdornment>
          )
        }}
      />
      <CustomInput
        labelText="Email..."
        id="email"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "email",
          endAdornment: (
            <InputAdornment position="end">
              <Email className={classes.inputIconsColor} />
            </InputAdornment>
          )
        }}
      />
      <CustomInput
        labelText="Password"
        id="pass"
        value="yemi" 
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "password",
          endAdornment: (
            <InputAdornment position="end">
              <LockOutline
                className={classes.inputIconsColor}
              />
            </InputAdornment>
          )
        }}
      />
      <input type="text" name="yemi" id="yemi" value="yemi" />
    </CardBody>
    <CardFooter className={classes.cardFooter}>
      <ListItem className={classes.listItem}>
        <Link to={"/Login"} className={classes.link}>
          <Button color="transparent" className={classes.navLink}>
            or Login
        </Button>
        </Link>
      </ListItem>
    </CardFooter>
  </form>
)

const Login = ({ classes }) => (
  <form className={classes.form}>
    <CardHeader color="primary" className={classes.cardHeader}>
      <h2>Login</h2>
    </CardHeader>
    <CardBody>
      <TextField
        id="Email"
        label="Email"
        value={this.state.email}
        margin="normal"
      />
      <TextField
        id="Password"
        label="Password"
        className={classes.textField}
        value={this.state.password}
        onChange={this.handleChange('name')}
        margin="normal"
      />
    </CardBody>
    <CardFooter className={classes.cardFooter}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/Signup"
          className={classes.navLink}
        >
          or SignUp
        </Button>
      </ListItem>
    </CardFooter>
  </form>
)
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }


  render() {
    const { classes, match, ...rest } = this.props;
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
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  {match.path === "/Login" && <Login classes={classes} />}
                  {match.path === "/Signup" && <Signup classes={classes} />}
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
