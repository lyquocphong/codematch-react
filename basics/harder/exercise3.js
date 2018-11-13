/**
 * End result should be:
 * - An object with a key "name" and value "computer"
 *      gets added to an already existing array
 * 
 * Fix errors in the code and make the code descriptive and immutable.
 * Modify the code as much as you want, add/remove anything you want,
 * as long as the end result is correct.
 */
function add(obj, array) {
    array.push(obj);
}

var arr = [];
var itm = {name: "computer"};

add(arr, itm);

