var markName = document.getElementById("markName");
var markUrl = document.getElementById("markUrl");

var bookStore = [];

if (localStorage.getItem("markContainer")!== null) {
  bookStore = JSON.parse(localStorage.getItem("markContainer"));
  displayData();
}

function addSite() {
 if (validationName()==true && validationUrl()== true) {
  var bookmarker = {
    markName: markName.value,
    markUrl: markUrl.value,
  };
  bookStore.push(bookmarker);
  localStorage.setItem("markContainer", JSON.stringify(bookStore));
  displayData();
  clear();
 }
}

function clear() {
  markName.value = null;
  markUrl.value = null;
}
function displayData() {
  var data = "";
  for (var i = 0; i < bookStore.length; i++) {
    data += `<tr><td>${i}</td>
        <td>${bookStore[i].markName}</td>
        <td><button onclick="openUrl('http://${bookStore[i].markUrl}') "  id="myButton" class="btn mybtn btn-dark px-5 py-2">Visit</button></td>
        <td><button onclick="deleteItem(${i})" class="btn btn-info px-5 py-2">Delete</button></td></tr>`;
  }
  document.getElementById("tableData").innerHTML = data;
}
function openUrl(url) {
  window.open(url, '_blank');
}
function deleteItem(deleteItem) {
  bookStore.splice( deleteItem,1  )
  displayData()
} 
function validationName(){
  var text = markName.value;
  var regex = /[a-z|A-Z]{3}/gm;
  var massageName=document.getElementById('massageName');
  if (regex.test(text)==true) {
    markName.classList.add('is-valid')
    markName.classList.remove('is-invalid')
    massageName.classList.add('d-none')
    return true;
  }
  else{
    markName.classList.add('is-invalid')
    markName.classList.remove('is-valid')
    massageName.classList.remove('d-none')
    return false;
  }
}
function validationUrl(){
  var text = markUrl.value;
  var regex = /^(ftp|http|https):/;
  var massageUrl=document.getElementById('massageUrl');
  if (regex.test(text)==true) {
    markUrl.classList.add('is-valid')
    markUrl.classList.remove('is-invalid')
    massageUrl.classList.add('d-none')
    return true;
  }
  else{
    markUrl.classList.add('is-invalid')
    markUrl.classList.remove('is-valid')
    massageUrl.classList.remove('d-none')
    return false;
  }
}