import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

renderWeather(cityData){

const name=cityData.city.name;
const temps=cityData.list.map(weather=>weather.main.temp);
const pressure=cityData.list.map(weather=>weather.main.pressure);
const humidity=cityData.list.map(weather=>weather.main.humidity);
const lat=cityData.city.coord.lat;
const lon=cityData.city.coord.lon;

return(
           <tr key={name}>
             <td><GoogleMap lat={lat} lon={lon}/></td>
             <td><Chart data={temps} color="orange"/></td>
              <td><Chart data={pressure} color="green"/></td>
               <td><Chart data={humidity} color="blue"/></td>


          </tr>


	);

}


render()
{
return (
  <table className="table table-hover">
   <thead> 
     <tr>
       <th>City</th>
       <th>Temperature(k)</th>
       <th>Pressure(Pa) </th>
       <th>Humidity(%)</th>
     </tr>
   </thead>

   <tbody>
    {this.props.weather.map(this.renderWeather)}   
  </tbody>
                                                          
  
  </table>
);
}
}
                                                            //the map function means for every weather object the renderWeather will be called
                                                           //the object will itself be the arguement in the called function.
function mapStateToProps(state)
{

return {weather:state.weather}; //Es6 sytax -->  mapStateToProps({weather}){return {weather};}  
                               //its like const weather=state.weather and then return {weather:weather};



}

export default connect(mapStateToProps)(WeatherList);
