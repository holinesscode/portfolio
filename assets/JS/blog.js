//Фильтр категорий по кнопкам
$(function() {

    let filer = $("[data-filter]");
  
    filer.on("click", function(event) {
      event.preventDefault();
  
      let cat = $(this).data('filter');
  
      if(cat == 'all') {
        $("[data-cat]").removeClass("blog__news-hide");
      } else {
        $("[data-cat]").each(function(){ 
  
        let workCat = $(this).data('cat');
  
        if(workCat != cat) {
          $(this).addClass('blog__news-hide');
        } else {
          $(this).removeClass('blog__news-hide');
        }
      });
      }
    });
  });
  
  //Выборка фильтра категорий
  var header = document.getElementById("blog__selector");
  var btns = header.getElementsByClassName("blog__button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  

  
  //Функция поиска по блогу
function myFunction() {
    var input, filer, ul, li, a, i;
    input = document.getElementById('blog__search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('blog__menu');
    li = ul.getElementsByTagName('li');
    
    for (i=0; i<li.length; i++){
      a = li[i].getElementsByTagName("h1")[0];
      if (a.innerHTML.toUpperCase() .indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  
  //Фильтр категорий блога
  