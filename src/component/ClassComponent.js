import React from 'react';


class ClassComponent extends React.Component {
  
    constructor(props){
      super(props);

      this.state = {
        nom : 'Marie',
        prenom : 'Jean',
        age : '25',
};
  this.changerInfos = this.changerInfos.bind(this);
    }

  render() {
    return (
      <div className="App">
        <h1>{this.state.nom} {this.state.prenom} {this.state.age}</h1>
        <button onClick={this.changerInfos}>Changer les infos</button>
      </div>
    );
  }
  changerInfos(){
    this.setState({
      nom : 'Jeanne',
      prenom : 'AUSECOURS',
      age : '27',
    });

  }


}



export default ClassComponent;
