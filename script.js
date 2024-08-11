
function changePage(src) {
    window.open(src, "_blank");
}



const progressData = {
    column1: [
        { width: '88%', color: 'darkcyan' },
        { width: '4%', color: 'coral' },
        { width: '3%', color: 'purple' },
        { width: '3%', color: 'cyan' },
        { width: '2%', color: 'red' }
    ]
};


function updateProgress() {
    // Update column 1
    const column1Skills = document.querySelectorAll('.rating.review-column .rating-item .bar-container .bar');
    column1Skills.forEach((bar, index) => {
        if (progressData.column1[index]) {
            bar.style.width = progressData.column1[index].width;
            bar.style.background = progressData.column1[index].color;
        }
    });
}

// Call function on page load
document.addEventListener('DOMContentLoaded', updateProgress);

let menuIcon =document.querySelector('#menu-icon')
let navbar =document.querySelector('.navbar')
let sections =document.querySelectorAll('section')
let navLinks =document.querySelectorAll('header nava')
 window.onscroll =()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id= sec.getAttribute('id')

        if(top >=offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    })
 }
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
