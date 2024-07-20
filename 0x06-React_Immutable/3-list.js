/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}
export function addElementToList(list, element) {
  return list.push(element);
}
