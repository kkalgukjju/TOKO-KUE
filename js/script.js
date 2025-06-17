// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klil di luar elemen
const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Klik Menuju Whatsapp
function kirimWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const nohp = document.getElementById("nohp").value.trim();

  if (!nama || !alamat || !nohp) {
    alert("Harap isi semua data: Nama, Alamat, dan No HP.");
    return;
  }

  const pesan = `Halo Doughlight!%0ASaya ${nama}%0AAlamat: ${alamat}%0ANo HP: ${nohp}%0ASaya ingin pesan sesuatu.`;

  const nomor = "6285694421235";
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
}

// Fungsi TAB
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.menu-content').forEach(c => c.classList.remove('active'));

  document.querySelector('.tab[onclick*="' + tabId + '"]').classList.add('active');
  document.getElementById(tabId).classList.add('active');
}