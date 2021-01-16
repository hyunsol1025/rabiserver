window.onload = function () {
    document.getElementById('head-line-content').style.opacity = 1;
}

window.addEventListener('resize',function() {
   var ele = document.getElementById('head-line-content');
    
   if(document.body.offsetWidth <= 850){
       ele.src = "./src/img/logo2.png";
   } else {
       ele.src = "./src/img/logo.png";
   }
});