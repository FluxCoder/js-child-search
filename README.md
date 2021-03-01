# JavaScript Nested Array Search
This script allows you to search nested arrays and check if an element (child) exists.

### Why use it?
If you use AJAX to send/receive data from a backend, you might find yourself constantly writing code that checks data existence.
I wrote this to use within my own applications, it clears up my code, and prevents errors when I'm trying to JSON data from AJAX response.

**Features**
* Simple & Easy to add to your projects.
* Cleaner code, at least for me...
* Lower the risk of errors that break your code.
* Ability to use callback functions that are **only** called when _child_ in found in _nest_.

### How to use
There are two ways that you can use the function.
##### Example Array
```javascript
var data = {
  things: {
    books: {
      count: 1
    }
  }
};
```

##### Using a callback function
The callback function is only called when the _child_ is found in _parent_.
```javascript
childSearch(data, "things.books.count", function(element) {
	//Do something with element
});
```

##### Normal function call
Returns a boolean depending on if the _child_ was found in _parent_.
```javascript
childSearch(data, "things.books.count");
```
