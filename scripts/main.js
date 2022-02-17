const btnTop = document.getElementById('back-to-top');


window.onscroll = function() {
    scrollFunction();
    };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }
}    

btnTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});