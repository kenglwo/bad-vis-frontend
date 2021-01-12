import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LabelChips from "./LabelChips";
import { LabelAPI, LabelCategory, LabelOption } from "../../model/Label";
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
    };
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
            console.log("###################");
            console.log(categoryName);
            console.log(labels);

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
    const labelGroupNames = [
      "Issues",
      "Chart Types",
      "Data Types",
      "Domains",
      "Medium",
      "Layouts",
      "Effects",
    ];
    return (
      <Container className="mt-5">
        <Row className="">
          <LabelChips
            labelCategoryName="Issues"
            labelOptions={this.state.issueLabels}
          />
          <LabelChips
            labelCategoryName="Chart Types"
            labelOptions={this.state.chartTypesLabels}
          />
          <LabelChips
            labelCategoryName="Data Types"
            labelOptions={this.state.dataTypesLabels}
          />
          <LabelChips
            labelCategoryName="Domains"
            labelOptions={this.state.domainsLabels}
          />
          <LabelChips
            labelCategoryName="Medium"
            labelOptions={this.state.mediumLabels}
          />
          <LabelChips
            labelCategoryName="Layouts"
            labelOptions={this.state.layoutsLabels}
          />
          <LabelChips
            labelCategoryName="Effects"
            labelOptions={this.state.effectsLabels}
          />
          <LabelChips
            labelCategoryName="Flags"
            labelOptions={this.state.flagsLabels}
          />
        </Row>
      </Container>
    );
  }
}

export default LabelSetPanel;
