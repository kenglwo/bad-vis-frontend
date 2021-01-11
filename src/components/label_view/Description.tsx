import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "../../assets/styles/Header.scss";

interface Props {
  onChangeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface State {}

class Description extends React.Component<Props, State> {
  public render() {
    return (
      <Form.Group>
        <Form.Label>Description of Issues</Form.Label>
        <Form.Control
          as="textarea"
          rows={16}
          onChange={this.props.onChangeDescription}
        />
      </Form.Group>
    );
  }
}

export default Description;
