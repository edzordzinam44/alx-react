import { List } from 'immutable';

export function getListObject(object) {
    return object.get('list');
}

export function addElementToList(list, element) {
    return list.push(element);
}