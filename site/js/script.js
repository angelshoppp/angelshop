document.addEventListener("DOMContentLoaded", function (event) {
  // start coding
  var nav = document.querySelector("._nav")
  var body = document.querySelector("._body")
  var footer = document.querySelector("._footer")
  setInterval(function () {
    body.style.height = (innerHeight - nav.clientHeight - footer.clientHeight).toString() + "px"
  }, 10)
}
);