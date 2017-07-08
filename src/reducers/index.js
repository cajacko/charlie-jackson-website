import { combineReducers } from 'redux';
import items from 'reducers/items';
import templates from 'reducers/templates';
import urls from 'reducers/urls';

export default combineReducers({ items, templates, urls });
