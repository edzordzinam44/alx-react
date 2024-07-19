// Import the fromJS function from the Immutable.js library
const { fromJS } = require('immutable');

// Define the function getImmutableObject
function getImmutableObject(object) {
    // Convert the input object into an immutable Map using fromJS
    return fromJS(object);
}

// Export the function so it can be used in other files
module.exports = getImmutableObject;