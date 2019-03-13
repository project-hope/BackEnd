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
      storedThis.setState({[field]: e.target.value});
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
        <form styleName="form" onSubmit={this.handleSubmit}>
          <label styleName="label">
            Current Age
            <input
              styleName="input"
              type="number"
              value={currentAge}
              placeholder='Current Age'
              onChange={this.handleChange('currentAge')}/>
          </label>
          <br/>
          <label styleName="label">
            Retirement Age
            <input
              styleName="input"
              type="number"
              value={retirementAge}
              placeholder='Retirement Age'
              onChange={this.handleChange('retirementAge')}/>
          </label>
          <br/>
          <label styleName="label">
            Savings
            <input
              styleName="input"
              type="number"
              value={currentSavings}
              placeholder='Savings'
              onChange={this.handleChange('currentSavings')}/>
          </label>
          <br/>
          <label styleName="label">
            Immediate Expenses
            <input
              styleName="input"
              type="number"
              value={immediateExpenses}
              placeholder='Immediate Expenses'
              onChange={this.handleChange('immediateExpenses')}/>
          </label>
          <br/>
          <label styleName="label">
            Additional Annual Savings
            <input
              styleName="input"
              type="number"
              value={additionalSavings}
              placeholder='Additional Annual Savings'
              onChange={this.handleChange('additionalSavings')}/>
          </label>
          <br/>
          <label styleName="label">
            Additional Monthly Expenses
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesAmount}
              placeholder='Addional Monthly Expenses Amount'
              onChange={this.handleChange('monthlyExpensesAmount')}/>
          </label>
          <br/>
          <label styleName="label">
            Monthly Expenses Start Year
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesStart}
              placeholder='Monthly Expenses Start Year'
              onChange={this.handleChange('monthlyExpensesStart')}/>
          </label>
          <br/>
          <label styleName="label">
            Monthly Expenses End Year
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesEnds}
              placeholder='Monthly Expenses End Year'
              onChange={this.handleChange('monthlyExpensesEnds')}/>
          </label>
          <label styleName="label">
            Investment Choice: 
            <input 
              styleName="input" 
              type="range" 
              min="1" 
              max="9" 
              value={this.state.investmentChoice} 
              onChange={this.handleChange} 
            />
          </label>
          <br/>
          <button styleName="button" type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Disability;