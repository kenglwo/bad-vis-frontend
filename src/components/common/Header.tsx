import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Drawer from "./Drawer";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/Header.scss";

interface Props extends RouteComponentProps {}
interface State {}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.goToLoginPage = this.goToLoginPage.bind(this);
  }

  public goToLoginPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.history.push(`/login`);
  }

  public render() {
    return (
      <Navbar className="w-100 p-1" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Drawer />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link id="home" href="/">
            <HomeRoundedIcon
              className="text-white font-weight-bold pointer"
              fontSize="large"
            />
          </Nav.Link>
        </Nav>
        <IconButton onClick={this.goToLoginPage}>
          <AccountBoxIcon
            className="pointer text-white mr-5"
            fontSize="large"
          />
        </IconButton>
      </Navbar>
    );
  }
}

export default withRouter(Header);
