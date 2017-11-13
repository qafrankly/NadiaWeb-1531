import React, { Component, PropTypes } from 'react';
var fs = require('fs');
fs.writeFile("tmp/test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'h2 nadia 2',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      </div>
    );
  }
}

export default RandomTest;
