
import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';


export default class PieChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:3000/budget`)
        .then(res => {
          const budget1 = res.data.mybudget;
          let title = [];
          let value = [];
          budget1.forEach(element => {
            title.push(element.title);
            value.push(element.budget);
          });
          this.setState({ 
            Data: {
              labels: title,
              datasets:[
                 {
                    label:'ChartJS',
                    data: value ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}