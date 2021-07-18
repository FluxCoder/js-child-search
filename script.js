function childSearch(parent, child, callback = null) {
  var found = true;

  var nest = child.split(".");
  var nests = nest.length;

  if (nests > 1) {
    for (i = 0; i < nests; i++) {
      if ((nest[i] in parent) == false) {
        found = false;
        break;
      }
      parent = parent[nest[i]];
    }
  } else {
    if ((child in parent) == false) {
      found = false;
    }
    parent = parent[child];
  }

  //Check for callback, and ensure it's calleable.
  if (typeof callback === "function" && found) {
    return callback(parent);
  }
  
  return found;
}


/*
* Example data and function usage
*/

var data = {
  things: {
    books: {
      count: 1
    },
  }
};

childSearch(data, "things.books", function(element) {
  console.log(element.count);
});
