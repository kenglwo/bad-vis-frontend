import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { LoginUserInfo } from "../../model/User";

interface Props extends RouteComponentProps {}
interface State extends LoginUserInfo {}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userID: "",
      password: "",
      loginStatus: "",
    };

    this.onUserIDChanged = this.onUserIDChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.loginStudent = this.loginStudent.bind(this);
  }

  public onUserIDChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const userID: string = e.target.value;
    this.setState({ userID: userID });
  }

  public onPasswordChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const password: string = e.target.value;
    this.setState({ password: password });
  }

  public loginStudent(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // TODO: implement API connection
    this.props.history.push(`/label_view/tester`);
    // const url = `${process.env.REACT_APP_API_URL}/api/login_student`;
    // const loginStudentInfo = {
    //   student_id: this.state.userID,
    //   password: this.state.password,
    // };
    // const method = "POST";
    // const headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // };
    // const body = JSON.stringify(loginStudentInfo);
    //
    // fetch(url, { method, headers, body })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result.login_status);
    //     if (result.login_status === "success") {
    //       this.props.history.push(`/index/student/${this.state.userID}`);
    //     } else {
    //       this.setState({ loginStatus: result.login_status });
    //     }
    //   })
    //   .catch(console.error);
  }

  public render() {
    return (
      <div className="text-white mt-5 mb-5 p-3">
        <h2 className="mb-5">Login</h2>
        <Form className="mt-4">
          <Form.Group as={Row} controlId="formUserAuthenticaiton">
            <Form.Label column md={4} className="font-weight-bold text-right">
              Name
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                onChange={this.onUserIDChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formUserAuthenticaiton">
            <Form.Label column md={4} className="font-weight-bold text-right">
              Wechat/UST ID
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="password"
                placeholder="Enter Your Wechat/UST ID"
                onChange={this.onPasswordChanged}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col md={4} />
            <Col md={4}>
              <Button
                className="login mb-3"
                variant="primary"
                block
                type="submit"
                onClick={this.loginStudent}
              >
                Login
              </Button>
            </Col>
            <Col md={4} />
          </Row>
        </Form>
        {this.state.loginStatus === "no_user" && (
          <Alert className="" variant="danger">
            Wrong User ID
          </Alert>
        )}
        {this.state.loginStatus === "password_incorrect" && (
          <Alert className="" variant="danger">
            Wrong Password
          </Alert>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
