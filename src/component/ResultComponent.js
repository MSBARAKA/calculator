import React from 'react';
import './Coque.css';

class ResultComponent extends React.Component {
  render() {
    let { result } = this.props;

    return (
      <div className="result">
        <p>{ result }</p>
      </div>
    )
  }
}

export default ResultComponent;