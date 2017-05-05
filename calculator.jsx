import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subNums = this.subNums.bind(this);
    this.multNums = this.multNums.bind(this);
    this.divNums = this.divNums.bind(this);
    this.clearNums = this.clearNums.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  addNums(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subNums(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multNums(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divNums(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clearNums(e) {
    e.preventDefault();
    const result = 0;
    this.setState({ result });
  }

  render(){
const { result, num1, num2 } = this.state;

    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <button onClick={this.clearNums}>Clear</button>
        <br />
        <button onClick={this.addNums}>+</button>
        <button onClick={this.subNums}>-</button>
        <button onClick={this.multNums}>*</button>
        <button onClick={this.divNums}>/</button>
      </div>
    );
  }
}

export default Calculator;
