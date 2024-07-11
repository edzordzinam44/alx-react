// utils.js

/* Function to get the current year */
function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
	return "Holberton School";
  } else {
	  return "Holberton School main dashboard";
  }
}

// Export functions so they can be used in other files
module.export = {
  getFullYear,
  getFooterCopy
};
