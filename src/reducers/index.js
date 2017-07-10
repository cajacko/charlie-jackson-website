import { combineReducers } from 'redux';
import items from 'reducers/items';
import templates from 'reducers/templates';
import routes from 'reducers/routes';
import routeData from 'reducers/routeData';

export default combineReducers({ items, templates, routes, routeData });
