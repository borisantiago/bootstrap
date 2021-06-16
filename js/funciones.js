function btn_formulario(){
    $("#formulario").show("fast");
}

function btn_home(){
    $("#formulario").hide("fast");
}

function insertar(){
    if(document.formulario.email.value==""){
        $("#error_email").show("fast");
        document.formulario.email.style.border="1px solid red";
    }

    if(document.formulario.cantidad.value=="seleccione la cantidad"){
        $("#error_objetos").show("fast");
        document.formulario.cantidad.style.border="1px solid red";
    }

    if(document.formulario.area.value==""){
        $("#error_area").show("fast");
        document.formulario.area.style.border="1px solid red";
    }

    if(document.formulario.email.value!="" && document.formulario.cantidad.value!="seleccione la cantidad" && document.formulario.area.value!=""){
        $("#alert_save").show("fast");

        //alerta quitar en lapso tiempo
        setTimeout(function() {
            $("#alert_save").fadeOut(); 
                /*email*/
                    document.formulario.email.value="";
                    document.formulario.email.style.border="";
                /*cantidad*/
                    document.formulario.cantidad.value="seleccione la cantidad";
                    document.formulario.cantidad.style.border="";
                /*area*/
                    document.formulario.area.value="";
                    document.formulario.area.style.border="";
        },3000); 
    }

}


//escribiendo nombre
function colocar_correo(){
    var email=document.formulario.email.value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (expr.test(email) ){
        document.formulario.email.style.border="1px solid green";
        $("#error_email").hide("slow");
        return true;
    }
    else{
        document.formulario.email.style.border="1px solid red";
        $("#error_email").show("slow");
        return false;
    }           

  }

function colocar_objeto(){
    document.formulario.cantidad.style.border="1px solid green";
    $("#error_objetos").hide("slow");
  }

function colocar_area(){
    document.formulario.area.style.border="1px solid green";
    $("#error_area").hide("slow");
  }
