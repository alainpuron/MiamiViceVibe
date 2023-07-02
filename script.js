


const toggleBtn = document.querySelector('.toggle_btn')

const toggleBtnIcon = document.querySelector('.toggle_btn i')

const dropDownMenu = document.querySelector('.dropdown_menu')


toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var opacity = scrollPosition / maxScroll;
    
    navbar.style.backgroundColor = ` rgba(128, 0, 128, 0.135)`;
  });