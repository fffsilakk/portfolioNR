
// hamb
const hamb = document.querySelector('#hamb');
const navMenu = document.querySelector('#nav-menu');

hamb.addEventListener('click', function (){
    hamb.classList.toggle('hamb-active');
    navMenu.classList.toggle('hidden');
});

//klik hamb
window.addEventListener('click', function (e){
    if (e.target != hamb && e.target != navMenu){
        hamb.classList.remove('hamb-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode

var darkToggle = document.getElementById("darkToggle");

// Fungsi untuk mengatur dark mode dan menyimpan ke localStorage
function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add("dark");
        darkToggle.src = "dist/dark theme/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        darkToggle.src = "dist/dark theme/moon.png";
        localStorage.setItem("theme", "light"); 
    }
}

// Inisialisasi dark mode dari localStorage saat halaman dimuat
var darkModeStatus = localStorage.getItem("theme");
if (darkModeStatus === "dark") {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Ketika tombol toggle diklik, ubah status mode dan simpan ke localStorage
darkToggle.onclick = function() {
    var isDarkMode = document.body.classList.contains("dark");
    setDarkMode(!isDarkMode);
};


// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//fi
var typed = new Typed('#fi', {
    strings: ['Network Lover.', 'Fidel Silak.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });
