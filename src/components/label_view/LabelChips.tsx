import React from "react";
import Col from "react-bootstrap/Col";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { LabelOption } from "../../model/Label";

interface Props {
  labelCategoryName: string;
  labelOptions: LabelOption[];
}
interface State {}

class LabelChips extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.dataset.item);
  };

  public render() {
    const labelChips = this.props.labelOptions.map((d, i) => (
      <Chip
        key={i}
        data-item={d.labelName}
        label={d.labelName}
        onClick={this.handleClick}
        className="m-1"
        variant="outlined"
      />
    ));
    return (
      <Col className="d-flex flex-column text-white">
        <div className="font-weight-bold mb-2">
          <span>{this.props.labelCategoryName}</span>
        </div>
        {labelChips}
      </Col>
    );
  }
}

export default LabelChips;
