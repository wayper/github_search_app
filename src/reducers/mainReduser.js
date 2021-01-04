import { combineReducers } from 'redux';
import fetching from './fetching';
import localData from './localData';
import activePlanet from './activePlanet';
import pagination from './pagination';
import message from './message';

const mainReduser = combineReducers({
  fetching,
  localData,
  activePlanet,
  pagination,
  message,
});

export default mainReduser;
