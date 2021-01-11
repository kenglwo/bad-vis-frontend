import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "../../assets/styles/Header.scss";

interface Props {
  onChangeInvalid: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNotVis: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNotBad: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCannotDecide: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface State {}

class Checks extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <Form.Group className="d-flex justify-content-between ml-2 mr-2">
          <Form.Check
            inline
            label=""
            id="radio-box"
            type="checkbox"
            onChange={this.props.onChangeInvalid}
          />
          <Form.Check
            inline
            label=""
            id="radio-box"
            type="checkbox"
            onChange={this.props.onChangeNotVis}
          />
          <Form.Check
            inline
            label=""
            id="radio-box"
            type="checkbox"
            onChange={this.props.onChangeNotBad}
          />
          <Form.Check
            inline
            label=""
            id="radio-box"
            type="checkbox"
            onChange={this.props.onChangeCannotDecide}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <p>Invalid</p>
          <p>Not vis</p>
          <p>Not bad</p>
          <p>Cannot decide</p>
        </div>
      </div>
    );
  }
}

export default Checks;
