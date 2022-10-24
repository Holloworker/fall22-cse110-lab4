let d = new Date();
let time = d.toLocaleDateString();
function print(t){
    console.log(time);
}
var t = setInterval(print,1000);
