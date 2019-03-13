import React from 'react';

class Divorce extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentAge: undefined,
      gender: "",
      currentSavings: 0,
      additionalAnnualSavings: 0,
    };
  }

  componentDidMount(){
    // API things
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Current Age: 
          <input type="number" value={this.state.currentAge} onChange={this.handleChange} />
        </label>
        <label>
          Gender: 
          <input type="number" value={this.state.currentAge} onChange={this.handleChange} />
        </label>

      </form>
    );
  }
}