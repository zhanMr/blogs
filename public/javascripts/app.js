"use strict";

define("b", [], function () {
  return { b: 200 };
}), define("a", ["b"], function (n) {
  return console.log(n), { a: 200 };
}), require(["a"], function (n) {
  console.log(n);
}), define("c", function () {});