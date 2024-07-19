const { fromJS } = require('immutable');

// Define the function getImmutableObject
function getImmutableObject(obj) {
    // Convert the input object into an immutable Map using fromJS
    return fromJS(obj);
}

// Export the function so it can be used in other files
module.exports = getImmutableObject;
