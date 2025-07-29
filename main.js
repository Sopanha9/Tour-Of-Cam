  Swal.fire({
  title: '<span style="font-family: Bayon; font-size: 28px;">សូមស្វាគមន៍!</span>',
  html: '<p style="font-family: Battambang; font-size: 18px;">សូមរីករាយជាមួយការស្វែងយល់អំពីដំណើរកំសាន្តកម្ពុជា!</p>',
  imageUrl: '/img/ankor-wat.png', // any nice icon/image
  imageWidth: 80,
  imageHeight: 80,
  // background: '#fff url("https://sweetalert2.github.io/images/trees.png")',
  confirmButtonText: 'ចាប់ផ្តើម'
});

  const themeToggle = document.getElementById('theme');

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
  });
const contactToggle = document.getElementById("contact-toggle");
  const submenu = document.getElementById("contact-submenu");

  contactToggle.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  });

  // close when clicking outside
  document.addEventListener("click", function (e) {
    if (!document.querySelector(".contact-menu").contains(e.target)) {
      submenu.style.display = "none";
    }
  });

  // const telePhone = document.getElementById("tele");

  // telePhone.addEventListener("click", ()=> {
    
  // })

  document.getElementById("showPhone").addEventListener("click", function (e) {
  e.preventDefault();

  Swal.fire({
    title: `<p style="font-family: 'Bayon'">លេខទូរស័ព្ទ</p>`,
    html: '<strong> Metfone: 088 65 40483 </strong><br>' + '<strong> Cellcard: 012 45 65 99</strong>'
    ,
    showConfirmButton: false,
    showCloseButton: true,
    width: 300,
    padding: '1em',
    backdrop: true,
  });
});

function sr() {
  window.open("/siemReap/index.html", "_blank");
}
function btb() {
  window.open("/Battambang/index.html", "_blank");
}
function pp() {
  window.open("/PhnomPenh/index.html", "_blank");
}
function kps() {
  window.open("/sihaNouk/index.html", "_blank");
}
