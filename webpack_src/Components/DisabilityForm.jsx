import React from 'react';
import '../css/form.css';

class Disability extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.state = {
      currentAge: undefined,
      retirementAge: undefined,
      currentSavings: undefined,
      immediateExpenses: undefined,
      additionalSavings: undefined,
      monthlyExpensesAmount: undefined,
      monthlyExpensesStart: undefined,
      monthlyExpensesEnds: undefined,
      investmentChoice: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)

  }

  handleChange(field) {
    const storedThis = this;
    return function (e) {
      storedThis.setState({ [field]: e.target.value });
    };
  }

  render() {
    const {
      currentAge,
      retirementAge,
      currentSavings,
      immediateExpenses,
      additionalSavings,
      monthlyExpensesAmount,
      monthlyExpensesStart,
      monthlyExpensesEnds
    } = this.state;

    return (
      <div>
        <form className={"form"} onSubmit={this.handleSubmit}>
          <label className={"label"}>
            Current Age
            <input
              className={"input"}
              type="number"
              value={currentAge}
              placeholder='Current Age'
              onChange={this.handleChange('currentAge')} />
          </label>
          <br />
          <label className={"label"}>
            Retirement Age
            <input
              className={"input"}
              type="number"
              value={retirementAge}
              placeholder='Retirement Age'
              onChange={this.handleChange('retirementAge')} />
          </label>
          <br />
          <label className={"label"}>
            Savings
            <input
              className={"input"}
              type="number"
              value={currentSavings}
              placeholder='Savings'
              onChange={this.handleChange('currentSavings')} />
          </label>
          <br />
          <label className={"label"}>
            Immediate Expenses
            <input
              className={"input"}
              type="number"
              value={immediateExpenses}
              placeholder='Immediate Expenses'
              onChange={this.handleChange('immediateExpenses')} />
          </label>
          <br />
          <label className={"label"}>
            Additional Annual Savings
            <input
              className={"input"}
              type="number"
              value={additionalSavings}
              placeholder='Additional Annual Savings'
              onChange={this.handleChange('additionalSavings')} />
          </label>
          <br />
          <label className={"label"}>
            Additional Monthly Expenses
            <input
              className={"input"}
              type="number"
              value={monthlyExpensesAmount}
              placeholder='Addional Monthly Expenses Amount'
              onChange={this.handleChange('monthlyExpensesAmount')} />
          </label>
          <br />
          <label className={"label"}>
            Monthly Expenses Start Year
            <input
              className={"input"}
              type="number"
              value={monthlyExpensesStart}
              placeholder='Monthly Expenses Start Year'
              onChange={this.handleChange('monthlyExpensesStart')} />
          </label>
          <br />
          <label className={"label"}>
            Monthly Expenses End Year
            <input
              className={"input"}
              type="number"
              value={monthlyExpensesEnds}
              placeholder='Monthly Expenses End Year'
              onChange={this.handleChange('monthlyExpensesEnds')} />
          </label>
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

export default Disability;