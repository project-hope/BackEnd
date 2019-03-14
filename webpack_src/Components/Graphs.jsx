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
            legendNames: ['PortValue_Exp', 'PortValue_UB', 'PortValue_LB'],
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
            legendNames: ['Income_Exp', 'Income_UB', 'Income_LB'],
            position: 'bottom',
          })
      ]
    }
    return (
      <div>
        {this.props.chartVisible &&
          <div className={'graphs'}>
            <div className={"individualGraph"}>
              <h2 className={"heading"}>Portfolio Value</h2>
              <ChartistGraph data={this.props.portfolioChartData} options={portfolioChartOptions} type={'Line'} />
              <br />
            </div>
            <div className={"individualGraph"}>
              <h2 className={"heading"}>Annual Retirement Income</h2>
              <ChartistGraph data={this.props.incomeChartData} options={incomeChartOptions} type={'Line'} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Graphs;