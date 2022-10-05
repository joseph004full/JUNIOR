import {
  FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  CLEAN_LOG_IN_ERROR,
  SIGN_UP,
  SIGN_IN_GOOGLE,
  SIGN_IN_GITHUB,
  SEND_EMAIL,
  CLEAN_SEND_EMAIL,
  OPEN_MESSSAGE_MUST_LOGIN,
  CLOSE_MESSSAGE_MUST_LOGIN,
  CLOSE_MODAL_INFO_COLLABORATOR,
  OPEN_MODAL_INFO_COLLABORATOR,
  
  
} from '../actions/actiontype';
import { LocalStorage } from '../../util/localStorage';

const initialState = {
  filterProjects: [],
  // auser: {},
  user: {},
  logInError: {},
  mustLoginMessage: { open: false, msg: 1 },
  modalInfoCollaborator: false,
  passRecoveryMessage: {}
};


const homepageReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case FILTER_PROJECTS:
      return {
        ...state,
        filterProjects: payload
      }
    // case GET_USER:
    //   return {
    //     ...state,
    //     auser: payload
    //   }
    case LOG_IN:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      } 
    case SIGN_IN_GOOGLE:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case SIGN_IN_GITHUB:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case SIGN_UP:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case LOG_OUT:
      return { 
        ...state,
        // auser: {},
        user: {},
      }

    case LOG_IN_ERROR: 
      return {
        ...state,
        logInError: payload
      }

    case CLEAN_LOG_IN_ERROR:
      return {
        ...state,
        logInError: {}
      }
    case SEND_EMAIL: 
      return {
        ...state,
        passRecoveryMessage: payload
      }

    case CLEAN_SEND_EMAIL:
      console.log('ENTRE AL REDUCER')
      return {
        ...state,
        passRecoveryMessage: {}
      }
    
    case OPEN_MESSSAGE_MUST_LOGIN:
      return {
        ...state,
        mustLoginMessage: payload
      } 
      
    case CLOSE_MESSSAGE_MUST_LOGIN:
      return {
        ...state,
        mustLoginMessage: { open: false, msg: 1 }
      } 

    case OPEN_MODAL_INFO_COLLABORATOR:
      return {
        ...state,
        modalInfoCollaborator: true
      }

    case CLOSE_MODAL_INFO_COLLABORATOR:
      return {
        ...state,
        modalInfoCollaborator: false
      }

    default:
      return state;
  }
}

export default homepageReducer;