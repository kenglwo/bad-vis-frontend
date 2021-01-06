import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Top from "./components/top/Top";
import Login from "./components/account/Login";
import logo from "./assets/images/logo.svg";
import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Container className="p-0" fluid>
        <BrowserRouter>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col>
              <Switch>
                <Route exact={true} path={"/"} component={Top} />
                <Route path={"/login"} component={Login} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
