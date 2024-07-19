// Import the getImmutableObject function
const getImmutableObject = require('./0-fromjs');

// Define a sample object
const sampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Convert the sample object into an immutable Map
const immutableMap = getImmutableObject(sampleObject);

// Log the immutable Map to see the result
console.log(immutableMap);
