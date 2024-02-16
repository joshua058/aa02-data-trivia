/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

function listAllCitiesWithCountries(climateData) {
    // use map to make each data entry into city, country format
    const citiesInProperFormat = climateData.map(currentObject => `${currentObject.city}, ${currentObject.country}`);
    // this simply iterates through each element of the array, and returns the city and country
    // properties for each one.
    // formatted using literals like before to make it fit the requirements
    // then returns them
    return citiesInProperFormat;
}

console.log(listAllCitiesWithCountries(climateData));



/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/


function listAllUsCities(climateData) {
    // can use filter to go through all of the array and look for the elements with the country property
    // set to 'United States)
    // with this, can then map the U.S. entries to the format desired

    // filter method creates new array 'formattedUsCities'
    // filter function checks each entry to see if it is united states.
    // once the array has been filtered and only contains united states pairs
    // map method is used to format each entry into a string based on the template literal
    // it combines city, and country properties of each entry into a string.

    // the filter method syntax looks like:
    // currentObject (represents current entry being iterated over from climateData)
    // currentObject => (fat arrow designates anonymous function) Provides quick filtering condition.
    // Checks the entry it is currently on to see if the 'country' property is equal to
    // United States.
    // I need more experience and time writing filters. I still get so lost if not breaking it down.


    let formattedUsCities = climateData.filter(currentObject => currentObject.country === 'United States')
    .map(currentObject => `${currentObject.city}, ${currentObject.country}`);

    // return the array of the formatted cities.

    return formattedUsCities;
}

console.log(listAllUsCities(climateData));




/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/


function findDuplicates(climateData) {
    // Your code here
}

// console.log(findDuplicates(climateData));



/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/


function returnDuplicate(climateData) {
    // Your code here
}

// console.log(returnDuplicate(climateData));


/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/


function correctDuplicate(climateData, newCityName) {
    // Your code here
}

// console.log(correctDuplicate(climateData, "Peoria IL"));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
