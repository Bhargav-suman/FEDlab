var nm;
var tf = document.getElementById("number");
var num = parseInt(tf.value);
function validate() {
    var ch = document.getElementById("choice");
    var input = parseInt(ch.value);
    switch (input) {
        case 1:
             factorial();
            break;
        case 2:
             factors();
            break;
        case 3:
             reverse();
            break;
        case 4:
             perfectNumber();
            break;
        default:
            document.write("entered wrong choice");
    }
}
function factorial() {
    
    var f = 1;
    for (var i = 1; i <= parseInt(document.getElementById("number").value); i++) {
        var temp = f * i;
        f = temp;
    }
    document.write("factorial of the number " + parseInt(document.getElementById("number").value) + " is " + f)
}
function factors() {
    var a = [];
    let num=parseInt(document.getElementById("number").value);
    console.log(num);
    document.write("factors of "+ parseInt(document.getElementById("number").value) +" are ");
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            a.push(i);
        }
    }
    console.log(a);
    document.write(a);
}
function reverse() {
    var ch = document.getElementById("number").value;
    if(ch.length > 1){
        var s ="";
        for(var i=ch.length-1;i>=0;i--){
            s += ch[i];
        }
        document.write("reverse of "+ch+" is "+s);
    }
    else{
        document.write("reverse of "+ch+" is "+ch+"0");
    }

}
function perfectNumber() {
    var a = [];
    var s = 0;
    let num=parseInt(document.getElementById("number").value);
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            a.push(i);
            s += i;
        }
    }
    if(s == num){
        document.write(num + " is a perfect number");
    }
    
}