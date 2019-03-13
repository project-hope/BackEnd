import React from 'react';
import '../css/form.css';

class Divorce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: undefined,
      earningLevel: undefined,
      currentSavingsBeforeDivorce: undefined,
      currentSavingsAfterDivorce: undefined,
      additionalAnnualSavings: undefined,
      investmentChoice: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const storedThis = this;
    return function (e) {
      storedThis.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form className={"form"} onSubmit={this.handleSubmit}>
          <label className={"label"}>
            Current Age:
            <input
              className={"input"}
              placeholder="Current Age"
              type="number"
              value={this.state.currentAge}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={"label"}>
            Earning Level:
            <input
              className={"input"}
              placeholder="Earning Level"
              type="number"
              value={this.state.earningLevel}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={"label"}>
            Current Savings Before Divorce:
            <input
              className={"input"}
              placeholder="Savings Before Divorce"
              type="number"
              value={this.state.currentSavingsBeforeDivorce}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={"label"}>
            Current Savings After Divorce:
            <input
              className={"input"}
              placeholder="Savings After Divorce"
              type="number"
              value={this.state.currentSavingsAfterDivorce}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={"label"}>
            Additional Annual Savings:
            <input
              className={"input"}
              placeholder="Additional Annual Savings"
              type="number"
              value={this.state.additionalAnnualSavings}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={"label"}>
            Investment Choice:
            <input
              className={"input"}
              type="range"
              min="1"
              max="9"
              value={this.state.investmentChoice}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className={"button"} type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Divorce;