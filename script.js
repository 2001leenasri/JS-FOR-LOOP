function get() {
    var a=document.getElementById('num').value;
    var result=true;
     for(var i=2;i<a;i++)
     {
        if(a%i==0)
        {
            document.getElementById("ans").innerHTML = a +" Not a Prime Number";
           
            result=false;
            break;
        }
       
     }
     if(result==true)
    {
        document.getElementById("ans").innerHTML = a +" Is a Prime Number";
     
    }      
    
}
