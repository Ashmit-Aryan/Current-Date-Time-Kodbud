function updateDateTime() {
  var date =
    new Date().getDate().toLocaleString() +
    "/" +
    (new Date().getMonth() + 1).toLocaleString() +
    "/" +
    new Date().getFullYear().toString();
  var time =
    new Date().getHours().toLocaleString() +
    ":" +
    new Date().getMinutes().toLocaleString() +
    ":" +
    new Date().getSeconds().toLocaleString();

  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
}
updateDateTime();

setInterval(updateDateTime, 1000);