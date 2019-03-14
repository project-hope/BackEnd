import React from 'react';
import '../css/form.css';

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
      <div>
        <form className={"form"} onSubmit={this.handleSubmit}>
          <label className={"label"}>
            Current Age
            <input
              className={"input"}
              type="number"
              value={current_age}
              placeholder='Current Age'
              onChange={this.handleChange('current_age')} />
          </label>
          <br />
          <label className={"label"}>
            Retirement Age
            <input
              className={"input"}
              type="number"
              value={retirement_age}
              placeholder='Retirement Age'
              onChange={this.handleChange('retirement_age')} />
          </label>
          <br />
          <label className={"label"}>
            Savings
            <input
              className={"input"}
              type="number"
              value={current_savings}
              placeholder='Savings'
              onChange={this.handleChange('current_savings')} />
          </label>
          <br />
          <label className={"label"}>
            Immediate Expenses
            <input
              className={"input"}
              type="number"
              value={immediate_expenses}
              placeholder='Immediate Expenses'
              onChange={this.handleChange('immediate_expenses')} />
          </label>
          <br />
          <label className={"label"}>
            Additional Annual Savings
            <input
              className={"input"}
              type="number"
              value={additional_annual_savings}
              placeholder='Additional Annual Savings'
              onChange={this.handleChange('additional_annual_savings')} />
          </label>
          <br />
          <label className={"label"}>
            Additional Monthly Expenses
            <input
              className={"input"}
              type="number"
              value={annual_expenses_amount}
              placeholder='Addional Monthly Expenses Amount'
              onChange={this.handleChange('annual_expenses_amount')} />
          </label>
          <br />
          <label className={"label"}>
            Monthly Expenses Start Year
            <input
              className={"input"}
              type="number"
              value={annual_expenses_start}
              placeholder='Monthly Expenses Start Year'
              onChange={this.handleChange('annual_expenses_start')} />
          </label>
          <br />
          <label className={"label"}>
            Monthly Expenses End Year
            <input
              className={"input"}
              type="number"
              value={annual_expenses_length}
              placeholder='Monthly Expenses Length'
              onChange={this.handleChange('annual_expenses_length')} />
          </label>
          <label className={"label"}>
            Investment Choice:
            <input
              className={"input"}
              type="range"
              min="1"
              max="9"
              value={portfolio}
              onChange={this.handleChange('portfolio')}
            />
          </label>
          <br />
          <button className={"button"} type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Disability;