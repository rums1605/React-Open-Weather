import axios from 'axios';


const API_KEY='f36fbc5f005ec2780339f0c4b7ba255e';


const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';


export function fetchWeather(city){


const url=`${ROOT_URL}&q=${city},us`;
const request=axios.get(url); //the get method is going to return a promise. 
                              //the action goes to middleware before the reducers
                              //the middleware resolves the promise and returns a new action with the resolved data
                              //this data is now passed to the reducers. this is where middleware comes into play by doing their act of modfying a action
console.log(request);

return {

	type:FETCH_WEATHER,
	payload:request
};


}