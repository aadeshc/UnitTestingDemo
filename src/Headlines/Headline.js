import React from "react";
import "../Headlines/style.css";
import PropTypes from "prop-types";
class HeadlineComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }
  render() {
    const { header, description } = this.props;
    return (
      <div data-test="AppClass">
        <h4 data-test="AppHeader">{header}</h4>
        <p data-test="AppDesc">{description}</p>
      </div>
    );
  }
}

export default HeadlineComponent;
HeadlineComponent.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string
};
