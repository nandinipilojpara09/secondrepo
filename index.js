window.onload = function () {
  var fetchbtn = document.getElementById("fetchbtn");
  fetchbtn.addEventListener("click", handler);
};
function handler() {
  console.log("you have clicked");
  //instantiate xhr object
  const xhr = new XMLHttpRequest();
  xhr.open("get", "myfile.txt", true);

  //do when response is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };

  //send the request
  xhr.send();
}
