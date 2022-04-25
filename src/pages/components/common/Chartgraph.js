import React,{ useState} from 'react';
import {Chart as ChartJs, Tooltip, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);


const options = {
          tooltips: {enabled: true},
                    plugins: {
                        tooltip: {
                        callbacks: {
                        label: data => ` ${data.formattedValue} % ${console.log(data.label)}`
                  },
                    backgroundColor:'#fff',
                    bodyColor:'#000',
                    bodyFontSize:"30",
                    borderColor:'#000',
                    borderWidth:'2',
                    padding:20,
                    titleColor:'#fff'
              },

        },
  };


const Chartgraph = () => {


    const [data, setData] = useState({
        datasets: [{
              data: [6.7, 20, 20,53.3],
              backgroundColor:[
                '#72C6EF',
                '#0AD7E4',
                '#6A2BBA',
                '#4E54C8'
              ],
              borderWidth: 0,
          },
          
        ],
    });

    return (
        <div>
            <Doughnut
            data={data}
            options={options}
             />
        </div>  
    );
};

export default Chartgraph;