import React from "react";
import Badge from "react-bootstrap/Badge";
import Chips from "./Chips";
// import "../../assets/styles/Header.scss";

interface Props {}
interface State {}

class LabelSetPanel extends React.Component<Props, State> {
  public render() {
    return (
      <div className="text-white">
        <p>Issues</p>
        <Chips />
      </div>
    );
  }
}

export default LabelSetPanel;
