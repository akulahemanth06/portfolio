document.addEventListener("DOMContentLoaded", function() {
    // Your existing code here

    // Intersection Observer for animating the timeline section
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const timeline = document.querySelector('section.timeline .edu-timeline');
    if (timeline) {
        observer.observe(timeline);
    }

    // Hamburger menu show/hide on scroll for larger screens
    const hamburger = document.querySelector('.hamberger');
    let lastScrollTop = 0;

    if (hamburger) {
        window.addEventListener('scroll', function() {
            const currentScrollTop = window.scrollY;

            // Check if the scroll position is more than 100px or any value you prefer
            if (currentScrollTop > 100) {
                hamburger.classList.add('show-on-scroll');
            } else {
                hamburger.classList.remove('show-on-scroll');
            }

            lastScrollTop = currentScrollTop;
        });
    }
});


//menu bar and closing function of mobile navigation
let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobilenav=document.querySelector('.mobile-nav');
let links = document.querySelectorAll('.mobile-nav .links')
hamberger.addEventListener('click',function(){ 
    mobilenav.classList.add('open');

});
times.addEventListener('click',function(){
    mobilenav.classList.remove('open')

});
links.forEach(link => {
    link.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
});
//sending mail to a personalized mail when clicked on send message
function sendMail(event){

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_zmkd935", "template_hg9m05s", parms)
}
//contact button
document.querySelector('.contact-btn').addEventListener('click', function() {
    window.location.href = '#contact';
});

