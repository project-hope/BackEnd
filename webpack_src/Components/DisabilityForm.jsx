import React from 'react';

class Disability extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.state = {
      current_age: undefined,
      retirement_age: undefined,
      current_savings: undefined,
      immediate_expenses: undefined,
      additional_annual_savings: undefined,
      annual_expenses_amount: undefined,
      annual_expenses_start: undefined,
      annual_expenses_length: undefined,
      portfolio: 5,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);

  }

  handleChange(field) {
    const storedThis = this;
    return function (e) {
      storedThis.setState({ [field]: e.target.value });
    };
  }

  render() {
    const {
      current_age,
      retirement_age,
      current_savings,
      immediate_expenses,
      additional_annual_savings,
      annual_expenses_amount,
      annual_expenses_start,
      annual_expenses_length,
      portfolio
    } = this.state;

    return (
      <div className={"form"}>
        <h2 className={"formHeader"}>Disability</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={"section"}>
            <label className={"label"}>
              Current Age:
              <input
                className={"input"}
                type="number"
                required
                value={current_age}
                placeholder='Current Age'
                onChange={this.handleChange('current_age')} />
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
                placeholder='Retirement Age'
                onChange={this.handleChange('retirement_age')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Savings:
              <input
                className={"input"}
                type="number"
                required
                value={current_savings}
                placeholder='Savings'
                onChange={this.handleChange('current_savings')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Immediate Expenses:
              <input
                className={"input"}
                type="number"
                required
                value={immediate_expenses}
                placeholder='Immediate Expenses'
                onChange={this.handleChange('immediate_expenses')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Additional Annual Savings:
              <input
                className={"input"}
                type="number"
                required
                value={additional_annual_savings}
                placeholder='Additional Annual Savings'
                onChange={this.handleChange('additional_annual_savings')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Additional Monthly Expenses:
              <input
                className={"input"}
                type="number"
                required
                value={annual_expenses_amount}
                placeholder='Addional Monthly Expenses Amount'
                onChange={this.handleChange('annual_expenses_amount')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Monthly Expenses Start Year:
              <input
                className={"input"}
                type="number"
                required
                value={annual_expenses_start}
                placeholder='Monthly Expenses Start Year'
                onChange={this.handleChange('annual_expenses_start')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Monthly Expenses End Year:
              <input
                className={"input"}
                type="number"
                required
                value={annual_expenses_length}
                placeholder='Monthly Expenses Length'
                onChange={this.handleChange('annual_expenses_length')} />
            </label>
          </div>
          <div className={"section"}>
            <label className={"label"}>
              Investment Choice: 
              <br/>
              (Least to most aggressive)
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
            </label>
          </div>
          <div className={"section"}>
            <button className={"button"} type='submit'>Submit</button>
          </div>
        </form>
        <br />
        <div className={"link"} onClick={this.props.onABLEClick}>Considering opening an ABLE account?</div>
      </div>
    );
  }
}

export default Disability;