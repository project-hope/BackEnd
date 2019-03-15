import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ctAxisTitle from 'chartist-plugin-axistitle'
import 'chartist-plugin-legend'

class Graphs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const universalChartOptions = {
      fullWidth: true,
      height: `${window.innerHeight * 0.35}px`,
      chartPadding: {
        right: 40
      },
      axisY: {
        onlyInteger: true,
        offset: 20
      }
    }
    const portfolioChartOptions = {
      ...universalChartOptions,
      plugins: [
        ctAxisTitle({
          axisY: {
            axisTitle: 'Portfolio Value($)',
            axisClass: 'ct-axis-title',
            offset: {
              x: 0,
              y: -20
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
            legendNames: ['Est. Portfolio Value', 'Portfolio Value Upper Range', 'Portfolio Value Lower Range'],
            position: 'bottom',
          })
      ]
    }

    const incomeChartOptions = {
      ...universalChartOptions,
      plugins: [
        ctAxisTitle({
          axisY: {
            axisTitle: 'Income($)',
            axisClass: 'ct-axis-title',
            offset: {
              x: 0,
              y: -20
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
            legendNames: ['Est. Annual Income', 'Income Upper Range', 'Income Lower Range'],
            position: 'bottom',
          })
      ]
    }
    return (
      <div className={'graphWrapper'}>
        {this.props.chartVisible &&
          <div className={'graphs'}>
            <div className={"individualGraph"}>
              <h2 className={"heading"}>Portfolio Value</h2>
              <ChartistGraph
                className={`${this.props.colorScheme}Lines`}
                data={this.props.portfolioChartData}
                options={portfolioChartOptions}
                type={'Line'}
              />
              <br />
            </div>
            {this.props.showIncomeGraph &&
              <div className={"individualGraph"}>
                <h2 className={"heading"}>Annual Retirement Income</h2>
                <ChartistGraph
                  className={`${this.props.colorScheme}Lines`}
                  data={this.props.incomeChartData}
                  options={incomeChartOptions}
                  type={'Line'}
                />
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default Graphs;