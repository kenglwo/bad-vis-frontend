import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LabelChips from "./LabelChips";
import {
  LabelAPI,
  LabelCategory,
  LabelOption,
  SelectedLabels,
} from "../../model/Label";
import "../../assets/styles/Header.scss";

interface Props {}
interface State {
  issueLabels: LabelOption[];
  chartTypesLabels: LabelOption[];
  dataTypesLabels: LabelOption[];
  domainsLabels: LabelOption[];
  mediumLabels: LabelOption[];
  layoutsLabels: LabelOption[];
  effectsLabels: LabelOption[];
  flagsLabels: LabelOption[];
  selectedLabels: SelectedLabels;
}

class LabelSetPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      issueLabels: [],
      chartTypesLabels: [],
      dataTypesLabels: [],
      domainsLabels: [],
      mediumLabels: [],
      layoutsLabels: [],
      effectsLabels: [],
      flagsLabels: [],
      selectedLabels: {
        issues: [],
        chartTypes: [],
        dataTypes: [],
        domains: [],
        medium: [],
        layouts: [],
        effects: [],
        flags: [],
      },
    };

    this.handleLabelClick = this.handleLabelClick.bind(this);
  }

  public keyMapping(labelName: string) {
    let key = "";
    switch (labelName) {
      case "Issues":
        key = "issues";
        break;
      case "Chart Types":
        key = "chartTypes";
        break;
      case "Data Types":
        key = "dataTypes";
        break;
      case "Domains":
        key = "domains";
        break;
      case "Medium":
        key = "medium";
        break;
      case "Layouts":
        key = "layouts";
        break;
      case "Effects":
        key = "effects";
        break;
      case "Flags":
        key = "flags";
        break;
    }

    return key;
  }

  public handleLabelClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const labelData: string | null = String(
      e.currentTarget.getAttribute("data-item")
    );
    const labelCategory: string = labelData.split(":")[0];
    const labelName = labelData.split(":")[1];

    this.setState((prevState: State) => {
      let selectedLabels: string[] = prevState.selectedLabels[labelCategory];

      if (selectedLabels.includes(labelName)) {
        const index: number = selectedLabels.indexOf(labelName);
        selectedLabels.splice(index, 1);
      } else {
        selectedLabels.push(labelName);
      }
      //
      const newSelectedLabels = Array.from(new Set(selectedLabels));
      return {
        selectedLabels: {
          ...prevState.selectedLabels,
          [labelCategory]: newSelectedLabels,
        },
      };
    });
  }

  public componentDidMount() {
    const url = `https://raw.githubusercontent.com/leoyuholo/bad-vis-images/master/notebooks/tmp/labelOptions.json`;
    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then(
        (result) => {
          result.forEach((labelGroup: LabelAPI) => {
            const categoryName: string = labelGroup["name"];
            const labels = labelGroup["options"].map((label) => {
              let labelOption = {
                labelName: label["name"],
                description: label.hasOwnProperty("description")
                  ? label["description"]
                  : "",
                subcategoryName: "",
              };
              labelOption["subcategoryName"] = label["subcategory"]
                ? label["subcategory"]
                : labelOption["subcategoryName"];
              labelOption["subcategoryName"] = label["subcategories"]
                ? label["subcategories"].join(":")
                : labelOption["subcategoryName"];
              // labelCategories["options"].push(labelOption);
              return labelOption;
            });
            // console.log("###################");
            // console.log(categoryName);
            // console.log(labels);

            switch (categoryName) {
              case "Issues":
                this.setState({ issueLabels: labels });
                break;
              case "Chart Types":
                this.setState({ chartTypesLabels: labels });
                break;
              case "Data Types":
                this.setState({ dataTypesLabels: labels });
                break;
              case "Domains":
                this.setState({ domainsLabels: labels });
                break;
              case "Medium":
                this.setState({ mediumLabels: labels });
                break;
              case "Layouts":
                this.setState({ layoutsLabels: labels });
                break;
              case "Effects":
                this.setState({ effectsLabels: labels });
                break;
              case "Flags":
                this.setState({ flagsLabels: labels });
                break;
            }
          });
        },
        (error) => {
          console.log("Label API Error");
        }
      );
  }

  public render() {
    console.log(this.state.selectedLabels);
    console.log(this.state.selectedLabels["issues"]);
    return (
      <Container className="mt-5">
        <Row>
          <LabelChips
            labelCategory="issues"
            labelCategoryName="Issues"
            labelOptions={this.state.issueLabels}
            selectedLabels={this.state.selectedLabels["issues"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="chartTypes"
            labelCategoryName="Chart Types"
            labelOptions={this.state.chartTypesLabels}
            selectedLabels={this.state.selectedLabels["chartTypes"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="dataTypes"
            labelCategoryName="Data Types"
            labelOptions={this.state.dataTypesLabels}
            selectedLabels={this.state.selectedLabels["dataTypes"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="domains"
            labelCategoryName="Domains"
            labelOptions={this.state.domainsLabels}
            selectedLabels={this.state.selectedLabels["domains"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="medium"
            labelCategoryName="Medium"
            labelOptions={this.state.mediumLabels}
            selectedLabels={this.state.selectedLabels["medium"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="layouts"
            labelCategoryName="Layouts"
            labelOptions={this.state.layoutsLabels}
            selectedLabels={this.state.selectedLabels["layouts"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="effects"
            labelCategoryName="Effects"
            labelOptions={this.state.effectsLabels}
            selectedLabels={this.state.selectedLabels["effects"]}
            handleLabelClick={this.handleLabelClick}
          />
          <LabelChips
            labelCategory="flags"
            labelCategoryName="Flags"
            labelOptions={this.state.flagsLabels}
            selectedLabels={this.state.selectedLabels["flags"]}
            handleLabelClick={this.handleLabelClick}
          />
        </Row>
      </Container>
    );
  }
}

export default LabelSetPanel;
