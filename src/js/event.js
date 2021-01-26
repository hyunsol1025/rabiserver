window.onload = function () {
    document.getElementById('head-line-content').style.opacity = 1;
    
    
    // 류아 -------
    document.getElementById('HELLOWORLD').addEventListener("click",function() {
        var ele = document.getElementById('HELLOWORLD');
        
        if(ele.src.includes("lyua2.png")){
            ele.src = "./src/img/lyua.png";
            document.getElementById('HELLOWORLD_TXT').style.display = "none";
            return;
        }
        
        ele.src = "./src/img/lyua2.png";
        document.getElementById('HELLOWORLD_TXT').style.display = "block";
    });
}

window.addEventListener('resize',function() {
   var ele = document.getElementById('head-line-content');
    
   if(document.body.offsetWidth <= 850){
       ele.src = "./src/img/logo2.png";
   } else {
       ele.src = "./src/img/logo.png";
   }
});

var nextKeyNum = 76;
function Lyua() {
    alert("망했어!");
    return;
    var ele = document.getElementById("HELLOWORLD");
    ele.style.display = "block";
    ele.style.opacity = 1;
    ele.style.height = 200;
}

window.addEventListener("keydown", function(e) {
    if(e.keyCode == nextKeyNum){
        switch(nextKeyNum){
            case 76:
                nextKeyNum = 89;
                break;
            case 89:
                nextKeyNum = 85;
                break;
            case 85:
                nextKeyNum = 65;
                break;
            case 65:
                Lyua();
                break;
        }
    } else {
        nextKeyNum = 76;
    }
    // 키 순서: 76 89 85 65 91
});