import React from 'react';
import axios from 'axios';

// import Disability from './disability/Disability.jsx';
// import Divorce from  './divorce/Divorce.jsx';

import DisabilityForm from './Components/DisabilityForm.jsx';
import DivorceForm from './Components/DivorceForm.jsx';
import Graphs from './Components/Graphs.jsx';

import './App.css';
// import '../app/assets/stylesheets/App.css';
// import '../app/assets/stylesheets/application.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDisability: false,
      showDivorce: false,
      chartVisible: false,
      portfolioChartData: {
        labels: [],
        series: []
      },
      incomeChartData: {
        labels: [],
        series: []
      },
    };

    this.returnHome = this.returnHome.bind(this);
    this.handleDisability = this.handleDisability.bind(this);
    this.handleDivorce = this.handleDivorce.bind(this);
    this.handleDisabilitySubmit = this.handleDisabilitySubmit.bind(this);
    this.handleDivorceSubmit = this.handleDivorceSubmit.bind(this);
    this.processData = this.processData.bind(this);
  }

  returnHome() {
    this.setState({ showDivorce: false });
    this.setState({ showDisability: false });
    this.setState({ chartVisible: false });
  }

  handleDisability() {
    this.setState({ showDivorce: false });
    this.setState({ showDisability: true });
  }

  handleDivorce() {
    this.setState({ showDivorce: true });
    this.setState({ showDisability: false });
  }

  handleDisabilitySubmit(data) {
    axios.get('/api/disability.json', {
      params: data
    }).then(response =>
      this.processData(response.data)
    );
  }

  handleDivorceSubmit(data) {
    axios.get('/api/divorce.json', {
      params: data
    }).then(response => {
      this.processData(response.data);
    });
  }

  processData(data) {
    console.log({ data });
    const portfolioChartData = { labels: [], series: [[], [], []] };
    const incomeChartData = { labels: [], series: [[], [], []] };
    data.forEach(datum => {
      console.log(datum);
      console.log(datum['age=']);
      portfolioChartData.labels.push(datum.age);
      portfolioChartData.series[0].push(datum.portfolio_value_expected);
      portfolioChartData.series[1].push(datum.portfolio_value_lb);
      portfolioChartData.series[2].push(datum.portfolio_value_ub);
      incomeChartData.labels.push(datum.age);
      incomeChartData.series[0].push(datum.income_expected);
      incomeChartData.series[1].push(datum.income_lb);
      incomeChartData.series[2].push(datum.income_ub);
    });
    this.setState({ portfolioChartData, incomeChartData, chartVisible: true });
    this;
  }

  render() {
    return (
      <div className={"background"}>
        <div className={"header"}>
          <h1 margin={0} onClick={this.returnHome}>Project Hope</h1>
        </div>

        <div className={"body"}>
          {!this.state.showDivorce && !this.state.showDisability &&
            <div>
              <button onClick={this.handleDisability}>Disability</button>
              <button onClick={this.handleDivorce}>Divorce</button>
            </div>
          }
          {this.state.showDisability && !this.state.showDivorce &&
            < DisabilityForm onSubmit={this.handleDisabilitySubmit} />
          }

          {this.state.showDivorce && !this.state.showDisability &&
            < DivorceForm onSubmit={this.handleDivorceSubmit} />
          }

          {(this.state.showDivorce || this.state.showDisability) &&
            < Graphs chartVisible={this.state.chartVisible} portfolioChartData={this.state.portfolioChartData} incomeChartData={this.state.incomeChartData} />
          }
        </div>
      </div>
    );
  }
}

export default App;