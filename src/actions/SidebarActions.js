import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../constants/ActionTypes';

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
  };
}

export function toggleSidebar(currentState) {
  if(currentState) {
    return closeSidebar()
  } else {
    return openSidebar()
  }
}