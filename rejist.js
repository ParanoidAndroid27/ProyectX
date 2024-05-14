$(document).ready(function() {
    // Función para validar el formulario
    function validarFormulario() {
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var valido = true;

        // Validación del campo nombre
        if (nombre === "") {
            $("#errorNombre").text("Por favor ingrese su nombre");
            valido = false;
        } else {
            $("#errorNombre").text("");
        }

        // Validación del campo apellido
        if (apellido === "") {
            $("#errorApellido").text("Por favor ingrese su apellido");
            valido = false;
        } else {
            $("#errorApellido").text("");
        }

        // Validación del campo email
        if (email === "") {
            $("#errorEmail").text("Por favor ingrese su email");
            valido = false;
        } else {
            $("#errorEmail").text("");
        }

        // Validación del campo contraseña
        if (password === "") {
            $("#errorPassword").text("Por favor ingrese su contraseña");
            valido = false;
        } else {
            $("#errorPassword").text("");
        }

        return valido;
    }

    // Evento para validar el formulario cuando se envíe
    $("#registroButton").click(function() {
        if (validarFormulario()) {
            // Aquí puedes enviar el formulario o hacer otras acciones
            alert("¡Registro exitoso! Gracias por registrarte."); // Mostrar mensaje de éxito
        }
    });
});
