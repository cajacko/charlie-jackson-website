import { combineReducers } from 'redux';
import items from 'reducers/items';
import routes from 'reducers/routes';
import routeData from 'reducers/routeData';
import fourOhFour from 'reducers/fourOhFour';

export default combineReducers({
  items,
  routes,
  routeData,
  fourOhFour,
});
