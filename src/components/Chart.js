
  
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './chart.css'

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['ISIS_Tweets', 'ISIS_Retweets', 'ISIS_Mentions', 'Legit_Tweets', 'Legit_Retweets', 'Legit_Mentions'],
        datasets:[
          {
            label:'Tweet Count',
            data:[
              17434323,
              10436603,
              19570380,
              17454068 ,
              12175619 ,
              17479990

            ],
            backgroundColor:["rgba(29,161,242,0.6)",
            "rgba(29,161,242,0.6)",
            "rgba(29,161,242,0.6)",
            "rgba(101 ,119 ,134,0.6)",
            "rgba(101 ,119 ,134,0.6)",
            "rgba(101 ,119 ,134,0.6)"
          ]
          },
          
          
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
        <Line 
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Tweet data of 9.3 billion tweets',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

       

      
      </div>
    )
  }
}

export default Chart;
