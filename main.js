var family=["brother.png","me.png","dad.png","mom.png"];
var i=0;
function NEXT(){
i++;
if(i>4){
    i=0;
}
var y=family[i];
document.getElementById("iad").src=y;
}