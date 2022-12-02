
// Выборка карт (Сервер,Команда,Войс)
function openCard(evt, cardName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("advantages__desc-text");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("advantages__button");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cardName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Смена картинок в выборке карт
$(function(){
    $(".advantages__button").on("click", function() {
    var i = $(".advantages__button").index(this);
    $(".advantages__desc-pictures_pic").not($(".advantages__desc-pictures_pic").eq(i).addClass("show")).removeClass("show")
    })
});

//Попап при нажатии на "Как зайти"
document.getElementById("popup__open-btn").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
    document.getElementsByClassName("overlay")[0].classList.add("active");
    document.body.style.overflow = 'hidden';
})

document.getElementById("popup__dismiss-btn").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    document.getElementsByClassName("overlay")[0].classList.remove("active");
    document.body.style.overflow = 'visible';
})