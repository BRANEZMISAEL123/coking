function validarCorreo(correo){
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionCorreo.test(correo);
}

function validarFormulario(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === ""){
        alert("Todos los campos son obligatorios.");
        return;
    }

    if(!validarCorreo(correo)){
        alert("Ingrese un correo válido.");
        return;
    }

    alert("Formulario enviado correctamente.");
    document.getElementById("formulario").reset();
}

function mostrarMensaje(){
    document.getElementById("mensajeInfo")
    .classList.toggle("d-none");
}

document.getElementById("formulario")
.addEventListener("submit", validarFormulario);

document.getElementById("botonInfo")
.addEventListener("click", mostrarMensaje);