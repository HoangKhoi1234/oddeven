var i=0
var odd=0
var even=0

function check(){
    var n=document.getElementById("lname").value
    var odd1=document.getElementById("odd")
    while(i<=n){
        if(i%2==0){
            even+=i
        }
        else{
            odd+=i
        }
        i++
    }

    if(odd1.checked){
        document.getElementById("result").innerHTML=odd
    }
    else{
        document.getElementById("result").innerHTML=even
    }
}