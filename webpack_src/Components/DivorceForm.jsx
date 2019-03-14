import React from 'react';

class Divorce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_age: undefined,
      earnings_level: undefined,
      current_savings: undefined,
      savings_after_divorce: undefined,
      additional_annual_savings: undefined,
      portfolio: 5,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    const storedThis = this;
    return function (e) {
      console.log({ field, event: e.target.value });
      storedThis.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const {
      current_age,
      earnings_level,
      current_savings,
      savings_after_divorce,
      additional_annual_savings,
      portfolio
    } = this.state;
    return (
      <div className={"form"}>
        <h2 className={"formHeader"}>Divorce</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={"section"}>
            <label className={"label"}>
              Current Age:
              <input
                className={"input"}
                placeholder="Current Age"
                type="number"
                required
                value={current_age}
                onChange={this.handleChange('current_age')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Earning Level:
              <input
                className={"input"}
                placeholder="Earning Level"
                type="string"
                required
                value={earnings_level}
                onChange={this.handleChange('earnings_level')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Current Savings Before Divorce:
              <input
                className={"input"}
                placeholder="Savings Before Divorce"
                type="number"
                required
                value={current_savings}
                onChange={this.handleChange('current_savings')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Current Savings After Divorce:
              <input
                className={"input"}
                placeholder="Savings After Divorce"
                type="number"
                required
                value={savings_after_divorce}
                onChange={this.handleChange('savings_after_divorce')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Additional Annual Savings:
              <input
                className={"input"}
                placeholder="Additional Annual Savings"
                type="number"
                required
                value={additional_annual_savings}
                onChange={this.handleChange('additional_annual_savings')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Investment Choice:
              <input
                className={"input"}
                type="range"
                required
                min="1"
                max="9"
                value={portfolio}
                onChange={this.handleChange('portfolio')}
              />
            </label>
          </div>
          <div className={"section"}>
            <button className={"button"} type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Divorce;