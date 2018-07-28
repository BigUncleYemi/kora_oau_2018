import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/Dashboard/Dashboard.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/Dashboard", name: "Dashboard", component: Dashboard},
  { path: "/Signup", name: "SignUp", component: LoginPage },
  { path: "/Login", name: "LoginPage", component: LoginPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
