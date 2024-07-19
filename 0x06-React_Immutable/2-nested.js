/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableMap = fromJS(object);

  return immutableMap.getIn(array);
}
