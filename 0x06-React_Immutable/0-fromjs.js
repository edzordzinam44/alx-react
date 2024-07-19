import { fromJS } from "/immutable";

export default function getImmutableObject(object) {
    return fromJS(object);
}

// Export the function so it can be used in other files
module.exports = getImmutableObject;