$(function () {
    //=========Ocultar el texto de las tarjetas ===========
    $(".card-text").hide();



    //==================Navegación entre secciones==================
       $("#navinicio").click(function () {
        $("section").hide(); 
        // Oculta todas las secciones
        $("#inicio").show(); 
        // Muestra la sección de inicio
        $(".nav-link").removeClass("active"); 
        // Quita la clase 'active' de todos los enlaces
        $(this).find(".nav-link").addClass("active"); 
        // Agrega la clase 'active' al enlace clicado
        // this=el elemento clicado
        //.find(".nav-link")=busca el elemento con clase nav-link dentro del elemento 
        // .addClass("active")=añade la clase active al enlace
    });
    
    $("#naveventos").click(function () {
        $("section").hide(); 
        $("#eventos").show(); 
        $(".nav-link").removeClass("active"); 
        $(this).find(".nav-link").addClass("active"); 
    });

    $("#navregistro").click(function () {
        $("section").hide(); 
        $("#registro").show(); 
        $(".nav-link").removeClass("active"); 
        $(this).find(".nav-link").addClass("active"); 
    });
    $("#navcontacto").click(function () {
        $("section").hide(); 
        $("#contacto").show(); 
        $(".nav-link").removeClass("active"); 
        $(this).find(".nav-link").addClass("active"); 
    });

    // =================Mostrar la descripción del evento al hacer clic================
    $(".evento").click(function () {
        //cuando se hace clic en un elemento con la clase evento
        //se ejecuta la función
        $(this).find(".card-text").show();
        //this=el elemento clicado
        //.find(".card-text")=busca el elemento con clase card-text dentro del elemento clicado
        //.show()=muestra 
    });


    // =============Validar el correo electrónico en el formulario de registro===========
    $("#registroForm").submit(function (e) {
        //(id formulario).submit(function(e)
        //submit=al enviar el formulario se ejecuta la función
        //function=se va a ejecutar una función
        //(e)=el evento que se produce al enviar el formulario
        e.preventDefault();
        // preventDefault()=previene la acción de enviar el formulario
        $("#correo").removeClass("is-invalid");
        // Elimina la clase de error del campo de correo
        // Si el usuario corrige el error no se quede marcado como inválido (cambia a válido)
        var email = $("#correo").val();
        //var email=variable que guarda el valor del campo correo 
        //$("#correo").val()=selecciona el campo correo y obtiene su valor
        //$("#correo")=selecciona el campo correo por su id
        //.val()=obtiene el valor del campo para guardarlo en la variable y compararlo 
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
        //regex=variable que guarda la expresión regular
        // /^[^\s@]+@[^\s@]+\.[^\s@]+$/=expresión regular para validar el correo


        //si el correo es válido se ejecuta el if
        if (regex.test(email)) {
            //regex.test(email)=comprueba si el correo cumple la expresión regular
            //.test=compara el valor del campo con la expresión regular
            $("#correo").removeClass("is-invalid").addClass("is-valid");
            //Marca el campo como válido
            //Quita la clase de error del campo de correo y añade la clase de válido
            var modal = new bootstrap.Modal(document.getElementById("registroModal"));
            //Crea una variable llamada modal que guarda el modal que se va a mostrar (mediante su id)
            //var modal=variable que guarda el modal
            //new bootstrap.Modal =crea un nuevo modal
            //(document.getElementById("registroModal"))=selecciona el modal por su id
            //document.getElementByID=método para seleccionar un elemento por su id
            modal.show();
            //muestra el modal de gracias por registrarse
            //
            //si el correo no es válido se ejecuta el else
        } else {
            $("#correo").addClass("is-invalid");
            //Marca el campo como inválido
            //Añade la clase de error al campo de correo
        }
    });


    // Validar el correo electrónico en el formulario de contacto
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        $("#email").removeClass("is-invalid");
        var email = $("#email").val();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(email)) {
            $("#email").removeClass("is-invalid").addClass("is-valid");
            var modal = new bootstrap.Modal(document.getElementById("contactoModal"));
            modal.show();
        } else {
            $("#email").addClass("is-invalid");
        }
    });
    //
    // ================= Buscador de eventos =================
    $("#searchBtn").click(function () {
        var searchTerm = $("#searchInput").val().toLowerCase().trim();
        //var searchTerm=variable que guarda el valor del campo
        //$("#searchInput").val()=selecciona el campo de búsqueda y obtiene su valor
        //.toLowerCase()=convierte el valor a minúsculas
        //.trim()=elimina los espacios en blanco al inicio y al final del valor
        $("#listaEventos .evento").each(function () {
            var nombre = $(this).find(".card-title").text().toLowerCase();
            var descripcion = $(this).find(".card-text").text().toLowerCase(); // Obtiene la descripción del evento

            if (nombre.includes(searchTerm)) {
            //si el nombre del evento coincide con el valor con el campo de busqueda 
            //.includes=compara el valor del campo con el nombre del evento
            //searchTerm= variable que almacena el valor del campo de búsqueda

                $(this).show();
                //Muestra el evento si coincide 
            } else {
                $(this).hide();
                // Oculta el evento si no coincide
            }

        });
    });

    // Restaurar la lista de eventos al limpiar el campo de búsqueda
    $("#searchInput").on("input", function () {
        if ($(this).val().trim() == "") {
        //if($(this)=selecciona el campo de búsqueda
        //.val()=obtiene el valor del campo
        //.trim()=elimina los espacios en blanco al inicio y al final del valor
        //==""=comprueba si el valor está vacío
            $("#listaEventos .evento").show(); 
            //Si esta condición se cumple, muestra todos los eventos
        }
    });

});