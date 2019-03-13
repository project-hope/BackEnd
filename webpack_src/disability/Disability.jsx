import React from 'react';
import Chartist from 'chartist';
import ctAxisTitle from 'chartist-plugin-axistitle';
import 'chartist-plugin-legend';
import './Disability.css';

class Disability extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.state = {
      currentAge: 40
    };
  }

  componentDidMount() {
    this.makeChart();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(field) {
    const storedThis = this;
    return function (e) {
      storedThis.setState({ [field]: e.target.value });
    };
  }

  makeChart() {
    new Chartist.Line('.ct-chart', {
      labels: [
        40, 41, 42, 43, 44
      ],
      series: [
        [
          1, 2, 3, 4, 5
        ],
        [
          1, 1, 1.5, 2, 2.5
        ],
        [1, 3, 4.5, 6, 7.5]
      ]
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        },
        axisY: {
          onlyInteger: true,
          offset: 20
        },
        plugins: [
          ctAxisTitle({
            axisY: {
              axisTitle: 'Portfolio Balance($)',
              axisClass: 'ct-axis-title',
              offset: {
                x: 0,
                y: 0
              },
              textAnchor: 'middle',
              flipTitle: true
            },
            axisX: {
              axisTitle: 'Age',
              axisClass: 'ct-axis-title',
              offset: {
                x: 0,
                y: 40
              },
              textAnchor: 'middle'
            }
          }),
          Chartist
            .plugins
            .legend({
              legendNames: ['Average', 'Lower Bound', 'Upper Bound']
            })
        ]
      });
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
      <div styleName="background">
        <form styleName="form" onSubmit={this.handleSubmit}>
          <label styleName="label">
            Current Age
            <input
              styleName="input"
              type="number"
              value={currentAge}
              placeholder='Current Age'
              onChange={this.handleChange('currentAge')} />
          </label>
          <br />
          <label styleName="label">
            Retirement Age
            <input
              styleName="input"
              type="number"
              value={retirementAge}
              placeholder='Retirement Age'
              onChange={this.handleChange('retirementAge')} />
          </label>
          <br />
          <label styleName="label">
            Savings
            <input
              styleName="input"
              type="number"
              value={currentSavings}
              placeholder='Savings'
              onChange={this.handleChange('currentSavings')} />
          </label>
          <br />
          <label styleName="label">
            Immediate Expenses
            <input
              styleName="input"
              type="number"
              value={immediateExpenses}
              placeholder='Immediate Expenses'
              onChange={this.handleChange('immediateExpenses')} />
          </label>
          <br />
          <label styleName="label">
            Additional Annual Savings
            <input
              styleName="input"
              type="number"
              value={additionalSavings}
              placeholder='Additional Annual Savings'
              onChange={this.handleChange('additionalSavings')} />
          </label>
          <br />
          <label styleName="label">
            Additional Monthly Expenses
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesAmount}
              placeholder='Addional Monthly Expenses Amount'
              onChange={this.handleChange('monthlyExpensesAmount')} />
          </label>
          <br />
          <label styleName="label">
            Monthly Expenses Start Year
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesStart}
              placeholder='Monthly Expenses Start Year'
              onChange={this.handleChange('monthlyExpensesStart')} />
          </label>
          <br />
          <label styleName="label">
            Monthly Expenses End Year
            <input
              styleName="input"
              type="number"
              value={monthlyExpensesEnds}
              placeholder='Monthly Expenses End Year'
              onChange={this.handleChange('monthlyExpensesEnds')} />
          </label>
          <br />
        </form>
        <div styleName="graph">
          < div className="ct-chart ct-golden-section" id="chart1"></div>
        </div>
      </div>
    );
  }

}

export default Disability;