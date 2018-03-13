import React from "react"
import PropTypes from "prop-types"

export default class InsideComp extends React.Component {
  render () {
    return (
      <div>
        Greeting: {this.props.greeting}
      </div>
    );
  }
}

InsideComp.propTypes = {
  greeting: PropTypes.string
};

