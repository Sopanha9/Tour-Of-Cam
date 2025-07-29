


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
