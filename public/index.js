"use strict";

(function() {

  window.addEventListener('load', init);

  async function init() {
    try {
      let response = await fetch ("https://gpa0verkd.github.io/Portfolio/coursework.json");
      let test = response.json();
      console.log(test);
    } catch (err) {
      console.error(err);
    }
  }
})();