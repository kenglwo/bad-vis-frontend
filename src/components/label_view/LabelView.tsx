import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";
import Description from "./Description";
import Checks from "./Checks";
import LabelSetPanel from "./LabelSetPanel";
// import "../../assets/styles/Header.scss";

interface Props extends RouteComponentProps<{ userID: string }> {}
interface State {
  imageSrc: string;
  description: string;
  checks: {
    invalid: boolean;
    notVis: boolean;
    notBad: boolean;
    cannotDecide: boolean;
  };
}

class LabelView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageSrc: "https://html5box.com/html5gallery/images/Swan_1024.jpg",
      description: "",
      checks: {
        invalid: false,
        notVis: false,
        notBad: false,
        cannotDecide: false,
      },
    };

    this.onClickBackButton = this.onClickBackButton.bind(this);
    this.onClickForwardButton = this.onClickForwardButton.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeInvalid = this.onChangeInvalid.bind(this);
    this.onChangeNotVis = this.onChangeNotVis.bind(this);
    this.onChangeNotBad = this.onChangeNotBad.bind(this);
    this.onChangeCannotDecide = this.onChangeCannotDecide.bind(this);
  }

  public onClickBackButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("click back");
  }

  public onClickForwardButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("click forward");
  }

  public onChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.value;
    this.setState({ description: value });
  }

  public onChangeInvalid(e: React.ChangeEvent<HTMLInputElement>) {
    const value: boolean = e.target.checked;
    this.setState((prevState: State) => ({
      checks: {
        ...prevState.checks,
        invalid: value,
      },
    }));
  }
  public onChangeNotVis(e: React.ChangeEvent<HTMLInputElement>) {
    const value: boolean = e.target.checked;
    this.setState((prevState: State) => ({
      checks: {
        ...prevState.checks,
        notVis: value,
      },
    }));
  }
  public onChangeNotBad(e: React.ChangeEvent<HTMLInputElement>) {
    const value: boolean = e.target.checked;
    this.setState((prevState: State) => ({
      checks: {
        ...prevState.checks,
        notBad: value,
      },
    }));
  }
  public onChangeCannotDecide(e: React.ChangeEvent<HTMLInputElement>) {
    const value: boolean = e.target.checked;
    this.setState((prevState: State) => ({
      checks: {
        ...prevState.checks,
        cannotDecide: value,
      },
    }));
  }

  public render() {
    return (
      <Container fluid className="">
        <Row>
          <TopBar
            onClickBackButton={this.onClickBackButton}
            onClickForwardButton={this.onClickForwardButton}
          />
        </Row>
        <Row>
          <Col md={6} className="">
            <Image src={this.state.imageSrc} fluid />
            <div className="text-white">
              <a href="#">Image Link</a>
            </div>
          </Col>
          <Col md={3} className="text-white">
            <Form>
              <Description onChangeDescription={this.onChangeDescription} />
              <Checks
                onChangeInvalid={this.onChangeInvalid}
                onChangeNotVis={this.onChangeNotVis}
                onChangeNotBad={this.onChangeNotBad}
                onChangeCannotDecide={this.onChangeCannotDecide}
              />
            </Form>
          </Col>
          <Col md={3} className="text-white bg-secondary">
            <div>Effects</div>
          </Col>
        </Row>
        <Row className="mb-5">
          <LabelSetPanel />
        </Row>
      </Container>
    );
  }
}

export default withRouter(LabelView);
