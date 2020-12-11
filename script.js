document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

btnTop = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "table-cell";
  } else {
    btnTop.style.display = "none";
  }
}

function openMenu() {
    document.getElementById("summaryDiv").style.right = "0";
    document.getElementById("summaryDiv").style.opacity = "1";
    document.getElementsById("btnMenu").style.transform = "rotate(0deg)";
    document.getElementsById("btnMenu").setAttribute("onclick", "closeMenu()");
}

function closeMenu() {
    document.getElementById("summaryDiv").style.right = "-12rem";
    document.getElementById("summaryDiv").style.opacity = "0";
    document.getElementsById("btnMenu").style.transform = "rotate(180deg)";
    document.getElementsById("btnMenu").setAttribute("onclick", "openMenu()");
}
