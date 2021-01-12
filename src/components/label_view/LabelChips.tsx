import React from "react";
import Col from "react-bootstrap/Col";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { LabelOption } from "../../model/Label";

interface Props {
  labelCategory: string;
  labelCategoryName: string;
  labelOptions: LabelOption[];
  selectedLabels: string[];
  handleLabelClick: (e: React.MouseEvent<HTMLElement>) => void;
}
interface State {
  selectedLabels: string[];
}

class LabelChips extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedLabels: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  public handleDelete(e: React.MouseEvent<HTMLElement>) {
    const labelName: string | null = e.currentTarget.getAttribute("data-item");
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.selectedLabels !== prevProps.selectedLabels) {
      this.setState({ selectedLabels: this.props.selectedLabels });
    }
  }

  public render() {
    const labelChips = this.props.labelOptions.map((d, i) => (
      <Chip
        key={i}
        data-item={`${this.props.labelCategory}:${d.labelName}`}
        label={d.labelName}
        clickable
        onClick={this.props.handleLabelClick}
        className="m-1"
        variant={
          this.state.selectedLabels.includes(d.labelName)
            ? "default"
            : "outlined"
        }
      />
    ));
    return (
      <Col className="d-flex flex-column text-white">
        <Paper variant="outlined">
          <div className="font-weight-bold mt-2 mb-2">
            <span>{this.props.labelCategoryName}</span>
          </div>
          {labelChips}
        </Paper>
      </Col>
    );
  }
}

export default LabelChips;
