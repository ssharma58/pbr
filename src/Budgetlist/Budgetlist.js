import axios from "axios"
import {Line} from 'react-chartjs-2';
import React from 'react';
import Chart from 'chart.js';



// export default class BudgetList extends React.Component{
// state ={

//     Budget: []
// }
// componentDidMount(){

//     // Axios.get('http://localhost:3000/budget')
//     // .then(res =>{

//     //     this.setState({Budget:res.data});
//     // })

   
//         var ctx = document.getElementById('myChart');
//       new Chart(ctx, {
//             type : 'pie',
//             // data: this.datasource
//             data:  {
//                 datasets: [
//                    {
//                        data: [],
//                     backgroundColor: [
//                             '#FF6384',
//                             '#63FF84',
//                             '#84FF63',
//                             '#8463FF',
//                             '#808000',
//                             '#FFFF00',
//                       ],
//                    }
//                 ],
//                 labels: []
//                   }
//         });
        
    

// // 

// return(

//     <div>
//     <canvas id ="myChart" width ="400" height="400"/>
//     </div>

// )
// }}



// export default class BudgetList extends React.Component {
//   state = {
//     Budget: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:3000/budget`)
//       .then(res => {
//         const Budget = res.data;
//         this.setState({ Budget: res.data});
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.Budget.map(Budget => <li>{BudgetList.name}</li>)}
//       </ul>
//     )
//   }
// }



// export default class Budgetlist extends React.Component {
    // const asx=() =>{const [chartData , setChartData] = useState({})

    // const chart = () => { 
    //     setChartData({
    //         labels:['mon','tue'],
    //         datasets:[
    //             {
    //                 label:'level of thick',
    //             data:[32,45],
    //             backgroundColor:['rgba(75,192)'],
    //             }
    //                 ]
    //     })
    // }
    // state ={
    //     Budget: [],
    // };
    // export default Budgetlist;
    // export default class Budgetlist extends React.Component{
    // componentDidMount() {
    //     axios.get('http://localhost:3000/budget') .then(res => {
    //         console.log(res);
    //         this.setState({ Budget: res.data });
    //     });
    // }
    // }
    // render(){
    //     return(   
            
    //         <ul>
    //             <line data={chartData}/>
    //         {/* {this.state.Budget.map(Bdata => <li>{Bdata.mybudget.title}</li>)} */}
    
    //             </ul>
    //             )
       
        
    // }

    

    // export default Budgetlist;