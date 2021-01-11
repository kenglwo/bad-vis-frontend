import React from "react";
import Button from "react-bootstrap/Button";
// import "../../assets/styles/Header.scss";

interface Props {
  onClickBackButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickForwardButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface State {}

class TopBar extends React.Component<Props, State> {
  public render() {
    return (
      <div className="d-flex align-items-center bg-dark text-white p-2 w-100">
        <Button
          variant="outline-secondary mr-3"
          onClick={this.props.onClickBackButton}
        >
          {"<"}
        </Button>
        1/30
        <Button
          variant="outline-secondary ml-3"
          onClick={this.props.onClickForwardButton}
        >
          {">"}
        </Button>
      </div>
    );
  }
}

export default TopBar;
