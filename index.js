// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
console.log(sum(1)());

//converts f(a,b,c) into a curried function f(a)(b)(c)
