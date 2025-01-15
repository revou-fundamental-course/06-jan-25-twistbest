//membuat slide show
var slideIndex = 1;
showSlides(slideIndex);

//membuat fungsi next dan prev slide show
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//membuat fungsi untuk show slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
       
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";
}   

//membuat auto slide
setInterval(function(){
    plusSlides(1);
}, 3000);

//membuat fungsi untuk menampilkan waktu
function getTime() {
    document.getElementById("Tanggal").innerHTML = Date();
}

//membuat fungsi untuk menampilkan report
function getreport() {
    const name = document.getElementById("nameinput").value;
    const date = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    const report = document.getElementById("pesan").value;
        
    if (name == "" || date == "" || gender == "" || report == "") {
        alert("Masih ada yang belum di isi!");
        return false
    }
   setreport(name,date,gender,report);  
   return false;
}     

//membuat fungsi untuk menampilkan report
function setreport(name,date,gender,report) {
    document.getElementById("nama-report").innerHTML = name;
    document.getElementById("tanggal-lahir-report").innerHTML = date;
    document.getElementById("jenis-kelamin-report").innerHTML = gender;  
    document.getElementById("pesan-report").innerHTML = report;
}

//membuat fungsi untuk scroll ke atas
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
//membuat fungsi untuk menampilkan waktu
getTime();
