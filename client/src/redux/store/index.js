import {configureStore, combineReducers} from "@reduxjs/toolkit";
import homepage from '../reducer/homepageReducer.js';
import project from '../reducer/projectsReducer.js';
import filterProjects from "../reducer/filterProjectsReducer.js";

const reducer = combineReducers({
  homepageReducer: homepage,
  projectsReducer: project,
  filterReducer: filterProjects
})

export const store = configureStore({
  reducer
});

export default store;