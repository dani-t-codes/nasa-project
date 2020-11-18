import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import NasaAPI from "./images-service.js";

function outputOptions(response) {
  if (response.collection) {
    let rando1 = Math.floor(Math.random() * 100);
    $("#image-display").html(`<img src="${response.collection.items[rando1].links[0].href}">`);
  } else {
    $("#image-display").html(`${response}`);
  }
}
async function apiServiceCall(searchTerm) {
  const response = await NasaAPI.imageCall(searchTerm);
  outputOptions(response);
}

$(document).ready(function () {
  $("#search-button").click(function () {
    event.preventDefault();
    let searchTerm = $("#search-term").val();
    apiServiceCall(searchTerm);
  });
});

// Math.floor(Math.random() * (Array.length -1));