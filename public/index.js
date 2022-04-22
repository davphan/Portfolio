"use strict";

(function() {

  window.addEventListener("load", init);

  async function init() {
    const catagories = ["CS", "EE", "MS", "OTH"];
    catagories.forEach(async function (catagory) {
      await updateCatagory(catagory, "education");
      await updateCatagory(catagory, "experience")
    })
  }

  async function updateCatagory(catagory, section) {
    let data = await getCoursework(catagory);
    let sectionList = qs(`#${section} #${catagory}-${section} ul`); // TODO: change ids in index.html file!!!
    data.forEach(item => {
      let cell = makeCell(item.code, item.name)
      sectionList.appendChild(cell);
    })
  }

  async function getCoursework(catagory) {
    try {
      let response = await fetch("portfolio/" + catagory);
      await statusCheck(response);
      let data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  function makeCell(title, desc) {
    let strong = gen("strong");
    strong.textContent = title + ": ";
    let weak = document.createTextNode(desc);
    let cell = gen("li");
    cell.appendChild(strong);
    cell.appendChild(weak);
    cell.classList.add("list-group-item");
    return cell;
  }

  /**
   * Checks if an API call has a bad error status and throws an error if so, otherwise
   * gives the response back.
   * @param {response} response - response from a fetch call
   * @returns {Promise} Promise with return value of the same given response, unless an error occurs
   */
   async function statusCheck(response) {
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
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
   * Shorthand method for setting a reference to a list of HTML elements with the
   * given tag name
   * @param {string} element HTML element tag name
   * @returns {NodeListOf<HTMLElement>} List of all HTML elements with the given tag name
   */
  function qsa(element) {
    return document.querySelectorAll(element);
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