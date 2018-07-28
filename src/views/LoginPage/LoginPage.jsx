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


const Signup = ({classes, handleChange, e, state}) => (
  <form className={classes.form}>
    <CardHeader color="primary" className={classes.cardHeader}>
      <h2>Signup</h2>
    </CardHeader>
    <CardBody>
      <TextField
        id="Fullname"
        label="Fullname"
        value={state.fullname}
        margin="normal"
      />
      <TextField
        id="email"
        label="email"
        className={classes.textField}
        value={state.email}
        margin="normal"
      />
      <TextField
        id="Phone Num"
        label="Phone Num"
        value={state.phoneNo}
        margin="normal"
      />
      <TextField
        id="Username"
        label="Username"
        value={state.username}
        margin="normal"
      />
      <TextField
        id="Password"
        label="Password"
        className={classes.textField}
        value={state.password}
        margin="normal"
      />
      <Button
        color="primary"
        onClick={(e) => Login(e)}
        className={classes.navLink}
      >
        Register
      </Button>
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

const Login = ({ classes, Login, state }) => (
  <form onSubmit={(e) => Login(e)} className={classes.form}>
    <CardHeader color="primary" className={classes.cardHeader}>
      <h2>Login</h2>
    </CardHeader>
    <CardBody>
      <div style={{display: 'inline-block'}}>
        <label htmlFor="username">Username</label>
        <input ref={(input) => this.username = input} type="text" required />
        <label htmlFor="password">Password</label>
        <input ref={(input) => this.password = input} type="password" required />
        <Button
          color="primary"
          onClick={(e)=>Login(e)}
          className={classes.navLink}
          type="submit"
        >
          Login
      </Button>
      </div>
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
      cardAnimaton: "cardHidden",
      username: '',
      password: '',
      fullname: '',
      phoneNo: '',
      email: ''
    };
    this.Login = this.Login.bind(this);
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

  Login(e) {
    e.preventDefault();
    var post = {
      username: this.username.value,
      password: this.password.value
    }
    console.log( )
    this.Auth.login(post.username, post.password)
      .then(res => {
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err)
      })
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
                  {match.path === "/Login" && <Login classes={classes} Login={this.Login} handleChange={this.handleChange} state={this.state} />}
                  {match.path === "/Signup" && <Signup classes={classes} handleChange={this.handleChange} state={this.state} />}
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
