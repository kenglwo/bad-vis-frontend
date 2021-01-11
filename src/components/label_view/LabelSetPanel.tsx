import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ChipsIssues from "./ChipsIssues";
import ChipsChartTypes from "./ChipsChartTypes";
import ChipsDataTypes from "./ChipsDataTypes";
import ChipsDomains from "./ChipsDomains";
import ChipsMedium from "./ChipsMedium";
import ChipsLayouts from "./ChipsLayouts";
import ChipsEffects from "./ChipsEffects";
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
                optionName: label["name"],
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
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
          <ChipsChartTypes />
        </Row>
      </Container>
    );
  }
}

export default LabelSetPanel;
