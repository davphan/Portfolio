"use strict";

(function() {

  window.addEventListener('load', init);

  async function init() {
    try {
      await fillInfo('edu');
      await fillInfo('exp');
    } catch (err) {
      console.error(err);
    }
  }

  async function fillInfo(section) {
    try {
      let response = await fetch(`https://gpa0verkd.github.io/Portfolio/${section}.json`);
      let jsonInfo = await response.json();
      const subjects = ['CS', 'EE', 'MS', 'Other'];
      subjects.forEach(tag => {
        fillListGroup(section + tag, jsonInfo);
      })
    } catch (err) {
      console.log(err);
    }
  }

  function fillListGroup(tag, jsonInfo) {
    const listNode = id(tag);
    let subject = tag.slice(3);
    let items = jsonInfo[subject];
    for (const key in items) {
      let listItem = gen('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `<strong>${key}:</strong><br> ${items[key]}`;
      listNode.prepend(listItem);
    }
  }

  /**
   * Shorthand method for setting a reference to an HTML element by ID
   * @param {string} element HTML element ID
   * @returns {HTMLElement} Requested HTML element
   */
   function id(element) {
    return document.getElementById(element);
  }

  /**
   * Shorthand method for setting a reference to an HTML element by tag name
   * @param {string} element HTML element tag name
   * @returns {HTMLElement} Requested HTML element
   */
  function qs(element) {
    return document.querySelector(element);
  }

  /**
   * Shorthand method for creating a new HTML element by tag name
   * @param {string} element HTML element tag name
   * @returns {HTMLElement} New HTML element
   */
  function gen(element) {
    return document.createElement(element);
  }
})();