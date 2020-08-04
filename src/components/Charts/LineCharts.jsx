import React ,{Component,Fragment} from 'react';
import LineChart from "@rsuite/charts/lib/charts/LineChart";
//import random from 'math';

const data = [["00:00", Math.random()], ["01:00", Math.random()]];





export default class LineCharts extends Component{

    render(){
        return(
            <div>
<LineChart name="Page View" data={data} />
</div>

        )
    }
}