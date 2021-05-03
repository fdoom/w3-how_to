var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;    //panel의 다음 요소 지정
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    })
}