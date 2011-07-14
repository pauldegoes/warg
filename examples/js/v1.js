function newLine(s) {
  var newP = document.createElement("p");
  newP.innerHTML = String(s);
  return newP;
}
function trace(s) {
  document.getElementById("trace").appendChild(newLine(s));
};
