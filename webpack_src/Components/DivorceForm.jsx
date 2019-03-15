import React from 'react';

class Divorce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_age: undefined,
      earnings_level: "low",
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
    console.log(this.state);
    this.props.onSubmit(this.state);
  }

  render() {
    const {
      current_age,
      retirement_age,
      current_savings,
      savings_after_divorce,
      additional_annual_savings,
      portfolio
    } = this.state;

    const earningLevelTooltip = "Description here";
    return (
      <div className={"form"}>
        <h2 className={"formHeader"}>Divorce</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={"section"}>
            <label className={"label"}>
              Current Age:
              <input
                className={"input"}
                type="number"
                required
                value={current_age}
                onChange={this.handleChange('current_age')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Retirement Age:
              <input
                className={"input"}
                type="number"
                required
                value={retirement_age}
                onChange={this.handleChange('retirement_age')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"} title="Description here">
              Earning Level:
              <span class="glyphicon glyphicon-info-sign white"></span>
              <select className={"input"} onChange={this.handleChange('earnings_level')}>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Savings Pre Divorce:
              <input
                className={"input"}
                type="number"
                required
                value={current_savings}
                onChange={this.handleChange('current_savings')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Savings Post Divorce:
              <input
                className={"input"}
                type="number"
                required
                value={savings_after_divorce}
                onChange={this.handleChange('savings_after_divorce')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Annual Savings:
              <input
                className={"input"}
                type="number"
                required
                value={additional_annual_savings}
                onChange={this.handleChange('additional_annual_savings')}
              />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              <div>
                Investment Choice: 
                <br/>
                (Least to most aggressive)
              </div>
              <div>
                <input
                  className={"input"}
                  type="range"
                  required
                  min="1"
                  max="9"
                  value={portfolio}
                  list="investmentChoiceList"
                  onChange={this.handleChange('portfolio')}
                />
                <br/>
                <div className={"percentEquity"}>
                  {portfolio}0% Equity
                </div>
                <datalist className={"tickers"} id="investmentChoiceList">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </datalist>
              </div>
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