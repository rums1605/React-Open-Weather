import React,{Component} from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';


function Average(data)
{
 var sum=0;
for(var i=0;i<data.length;i++)
{

	sum=sum+data[i];

}
 
const roundoff=Math.round((sum/data.length));
return roundoff ;
}


export default class Chart extends Component{

constructor(props)
{
super(props);

}


render(){

return(    <div>
            <Sparklines height={120} width={180} data={this.props.data} >
                  <SparklinesLine color={this.props.color} />
                  <SparklinesReferenceLine type="avg"/>
            </Sparklines>
          
           <div>{Average(this.props.data)}</div>
          </div>
      );

}

}



