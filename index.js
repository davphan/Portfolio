"use strict";

(function() {

  console.log("first check");
  window.addEventListener('load', init);

  async function init() {
    try {
      console.log("second check");
      let response = await fetch ("https://gpa0verkd.github.io/Portfolio/coursework.json");
      let test = await response.json();
      console.log(test);
    } catch (err) {
      console.error(err);
    }
  }
})();