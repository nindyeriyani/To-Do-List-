const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === '') { // ini mengecek nilai dari inputnya, jika kosong maka akan tampil alert
    alert("You must write something!") 
  } else {
    let li = document.createElement("li"); //jika tidak kosong, maka akan dibuat elemen <li>
    li.innerHTML = inputBox.value; //elemen <li> ini diatur menjadi nilai dari input
    listContainer.appendChild(li); // elemen <li> akan dimasukkan ke dalam listContainer pakai appendchild()
    let span = document.createElement("span"); // ini untuk membuat span alias logo x untuk delete
    span.innerHTML = "\u00d7";
    li.appendChild(span); //memasukkan span kedalam elemen <li>
  }
  inputBox.value = ""; //membersihkan nilai input box, supaya bisa digunakan lagi untuk menginput to do selanjutnya
  saveData(); //menyinpan data ke localstorage
}

listContainer.addEventListener("click", function(e) { //setiap kali diklik, maka akan dijalankan fungsi di dalamnya 
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


//function(e) = fungsi callback yang akan dieksekusi setiap kali event "click" terjadi pada elemen target.
//e  Merupakan parameter yang mewakili objek event, yang digunakan untuk mengakses informasi terkait event klik tersebut.