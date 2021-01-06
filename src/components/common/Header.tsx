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
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top ml-3"
            alt="React"
          />
        </Navbar.Brand>
        <Nav className="mr-4">
          <Nav.Link id="home" href="/">
            <HomeRoundedIcon
              className="text-white font-weight-bold pointer"
              fontSize="large"
            />
          </Nav.Link>
        </Nav>
        <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Search" className="mr-2" />
          <Button variant="outline-info pointer">Search</Button>
        </Form>
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
