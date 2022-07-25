function habilitar(){
    text_1=document.getElementById("txt_1").value;
    text_2=document.getElementById("txt_2").value;
    text_3=document.getElementById("txt_3").value;
    select_1 = document.getElementById("select_1").value;
    select_2 = document.getElementById("select_2").value;

    val=0;
    if( text_1 == ""){
        val++;
    }
    if( text_2 == ""){
        val++;
    
    }
    if( text_3 == ""){
        val++;
    
    }
    if( select_1 == ""){
        val++;
    }
    if( select_2 == ""){
        val++;
    }
    if (val== 0){
    document.getElementById("btn").disable=false;
    
    } else{
    document.getElementById("btn").disable=true;
    }
}
    document.getElementById("txt_1").addEventListener("keyup",habilitar);
    document.getElementById("txt_2").addEventListener("keyup",habilitar);
    document.getElementById("txt_3").addEventListener("keyup",habilitar);
    document.getElementById("select_1").addEventListener("change",habilitar);
    document.getElementById("select_2").addEventListener("change",habilitar);
    document.getElementById("btn").addEventListener("click",()=>
    {
     alert("muchas gracias");

    });