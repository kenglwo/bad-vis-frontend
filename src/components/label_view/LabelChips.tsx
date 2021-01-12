import React from "react";
import Col from "react-bootstrap/Col";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { LabelOption } from "../../model/Label";

interface Props {
  labelCategoryName: string;
  labelOptions: LabelOption[];
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

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  public handleDelete(e: React.MouseEvent<HTMLElement>) {
    const labelName: string | null = e.currentTarget.getAttribute("data-item");
  }

  public handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const labelName: string | null = String(
      e.currentTarget.getAttribute("data-item")
    );
    console.log(labelName);
    this.setState((prevState: State) => {
      let selectedLabels: string[] = prevState.selectedLabels;

      if (selectedLabels.includes(labelName)) {
        const index: number = selectedLabels.indexOf(labelName);
        selectedLabels.splice(index, 1);
      } else {
        selectedLabels.push(labelName);
      }

      const newSelectedLabels = Array.from(new Set(selectedLabels));
      return { selectedLabels: newSelectedLabels };
    });
  }

  public render() {
    console.log(this.state.selectedLabels);
    const labelChips = this.props.labelOptions.map((d, i) => (
      <Chip
        key={i}
        data-item={d.labelName}
        label={d.labelName}
        clickable
        onClick={this.handleClick}
        className="m-1"
        variant={"outlined"}
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
