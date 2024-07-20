/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}
