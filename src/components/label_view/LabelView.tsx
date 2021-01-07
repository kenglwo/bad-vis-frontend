import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import TopBar from "./TopBar";
import LabelSetPanel from "./LabelSetPanel";
// import "../../assets/styles/Header.scss";

interface Props extends RouteComponentProps<{ userID: string }> {}
interface State {
  imageSrc: string;
}

class LabelView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageSrc: "https://html5box.com/html5gallery/images/Swan_1024.jpg",
    };

    this.onClickBackButton = this.onClickBackButton.bind(this);
    this.onClickForwardButton = this.onClickForwardButton.bind(this);
  }

  public onClickBackButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("click back");
  }

  public onClickForwardButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("click forward");
  }

  public render() {
    return (
      <Container fluid className="p-0">
        <Row>
          <TopBar
            onClickBackButton={this.onClickBackButton}
            onClickForwardButton={this.onClickForwardButton}
          />
        </Row>
        <Row>
          <Col md={8} className="p-0">
            <Image src={this.state.imageSrc} fluid />
          </Col>
          <Col md={4} className="p-0">
            <LabelSetPanel />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(LabelView);
