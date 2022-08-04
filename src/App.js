import React from "react";
import './App.css';
import './component/Coque.css';
// import ClassComponent from './component/ClassComponent';
// import ConstComponent from './component/ConstComponent';
// import  FunctionComponent  from './component/FunctionComponent';
import CoqueCalculette from './component/CoqueCalculette';
// import AffichageSaisie from './component/AffichageSaisie';
// import BtnComponent from './component/BtnComponent';
import PartieBoutons from './component/PartieBoutons';
import ResultComponent from "./component/ResultComponent";
import Result from './component/ResultComponent';

class App extends React.Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="App-container">
        <CoqueCalculette/>
        
       
        <PartieBoutons onClick={this.onClick}/>
       
        <ResultComponent result={this.state.result} />
        

      </div>
    );
  }
}



export default App;
