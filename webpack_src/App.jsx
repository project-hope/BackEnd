import React from 'react';
import axios from 'axios';

import DisabilityForm from './Components/DisabilityForm.jsx';
import DivorceForm from './Components/DivorceForm.jsx';
import Graphs from './Components/Graphs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true,
      showABLEmodal: false,
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
      colorScheme: "disability",
      showIncomeGraph: true,
    };

    this.returnHome = this.returnHome.bind(this);
    this.handleDisability = this.handleDisability.bind(this);
    this.handleDivorce = this.handleDivorce.bind(this);
    this.handleABLEClick = this.handleABLEClick.bind(this);
    this.closeABLEModal = this.closeABLEModal.bind(this);
    this.handleDisabilitySubmit = this.handleDisabilitySubmit.bind(this);
    this.handleDivorceSubmit = this.handleDivorceSubmit.bind(this);
    this.processData = this.processData.bind(this);
  }

  returnHome() {
    this.setState({ isHomePage: true });
    this.setState({ chartVisible: false });
  }

  handleDisability() {
    this.setState({ chartVisible: false });
    this.setState({ showDivorce: false });
    this.setState({ showDisability: true });
    this.setState({ colorScheme: "disability" });
    this.setState({ isHomePage: false });
  }

  handleDivorce() {
    this.setState({ chartVisible: false });
    this.setState({ showDivorce: true });
    this.setState({ showDisability: false });
    this.setState({ colorScheme: "divorce" });
    this.setState({ isHomePage: false });
  }

  handleABLEClick() {
    this.setState({ showABLEmodal: true });
  }

  closeABLEModal() {
    this.setState({ showABLEmodal: false });
  }

  handleDisabilitySubmit(data) {
    if (data.current_age > 25) {
      this.setState({ showIncomeGraph: true });
    } else {
      this.setState({ showIncomeGraph: false });
    }
    axios.get('/api/disability.json', {
      params: data
    }).then(response =>
      this.processData(response.data)
    );
    // const portfolioChartData = { labels: [1, 2, 3, 4, 5], series: [[
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ]] };
    // const incomeChartData = { labels: [1, 2, 3, 4, 5], series: [[
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ]] };
    // this.setState({ portfolioChartData, incomeChartData, chartVisible: true });
  }

  handleDivorceSubmit(data) {
    this.setState({ showIncomeGraph: true });
    axios.get('/api/divorce.json', {
      params: data
    }).then(response => {
      this.processData(response.data);
    });
    // const portfolioChartData = { labels: [1, 2, 3, 4, 5], series: [[
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ]] };
    // const incomeChartData = { labels: [1, 2, 3, 4, 5], series: [[
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ], [
    //   Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    // ]] };
    // this.setState({ portfolioChartData, incomeChartData, chartVisible: true });
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
        {this.state.showABLEmodal &&
          <div class="img_wrp">
            <img className={"ableImage"} src={"https://res.cloudinary.com/dtw7iteso/image/upload/v1552595504/Project%20Hope/ABLE_chartTitle.png"} alt="Logo" />
            <div class="close" onClick={this.closeABLEModal}>x</div>
            {/* <span class="glyphicon glyphicon-remove" className={"close"}/> */}
          </div>

        }

        {this.state.isHomePage && !this.state.showABLEmodal &&
          <div className={"homePage"}>
            <h1 className={"homeHeader"}>Project HOPE</h1>
            <div>
              <img className={"homePageImage"} src={"https://res.cloudinary.com/dtw7iteso/image/upload/v1552595505/Project%20Hope/HomePage_Color.png"} alt="Logo" />
            </div>
            {/* <img className={"homePageImage"} src={"app/assets/images/HomePage_Color.png"} alt="Logo" /> */}
            <img className={"divorceImage"} onClick={this.handleDivorce} src={"https://res.cloudinary.com/dtw7iteso/image/upload/v1552595503/Project%20Hope/divorce.png"} alt="Logo" />
            <img className={"disabilityImage"} onClick={this.handleDisability} src={"https://res.cloudinary.com/dtw7iteso/image/upload/v1552595503/Project%20Hope/disability.png"} alt="Logo" />
            {/* <img src={"app/assets/images/HomePage_Mono.png"} alt="Logo" /> */}
          </div>
        }

        {!this.state.isHomePage && !this.state.showABLEmodal &&
          <React.Fragment>
            <div className={"header"} className={this.state.colorScheme}>
              <h1 className={"headerText"} onClick={this.returnHome}>Project HOPE</h1>

            </div>

            <div className={"body"}>
              {!this.state.showDivorce && !this.state.showDisability &&
                <div>
                  <button onClick={this.handleDisability}>Disability</button>
                  <button onClick={this.handleDivorce}>Divorce</button>
                </div>
              }
              {this.state.showDisability && !this.state.showDivorce &&
                < DisabilityForm onSubmit={this.handleDisabilitySubmit} onABLEClick={this.handleABLEClick} />
              }

              {this.state.showDivorce && !this.state.showDisability &&
                < DivorceForm onSubmit={this.handleDivorceSubmit} />
              }

              {(this.state.showDivorce || this.state.showDisability) &&
                < Graphs
                  chartVisible={this.state.chartVisible}
                  showIncomeGraph={this.state.showIncomeGraph}
                  portfolioChartData={this.state.portfolioChartData}
                  incomeChartData={this.state.incomeChartData}
                  colorScheme={this.state.colorScheme}
                />
              }
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
