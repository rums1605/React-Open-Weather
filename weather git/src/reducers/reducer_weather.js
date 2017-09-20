import {FETCH_WEATHER} from '../actions/index';


export default function(state=[],action)
{
	switch(action.type){

		case FETCH_WEATHER:
		return state.concat(action.payload.data); // always remember the reducers are meant to return a new instance of state evrytime they are called
		                                          //if i did state.push(---) it would mean modifying the state which violetes the condition
		                                          //you can also use  return[action.payload.data,...state];
		                                          

	}


	return state;

}