// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klil di luar elemen
const hm = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

//whatsapp
function kirimWhatsApp() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;

  const pesan = `Halo Doughlight!%0ASaya ${nama}%0AEmail: ${email}%0ANo HP: ${nohp}%0ASaya ingin bertanya/pesan sesuatu.`;

  const nomor = "6285694421235"; // Ganti dengan nomor WA kamu
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
}