import { List } from 'immutable';

export function getListObject(array) {
  return List.get(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
