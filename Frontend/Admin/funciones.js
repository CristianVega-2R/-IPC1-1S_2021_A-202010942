let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function enviarPDF()
{
    location.href="pdfListado.html"
}

function cargaArchivo(rutaForm,tipo)
{
    alert(rutaForm)
    let ruta = document.getElementById(rutaForm)

    fetch("http://localhost:5000/carga/"+(ruta.value)+"/"+tipo,
    {
        method:'POST',
        headers,
        body:
        `{
            "nombre":"a"
        }`
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error);
        }
    )
}

function cargaArchivoPaciente(rutaForm,tipo)
{
    alert(rutaForm)
    let ruta = document.getElementById(rutaForm)

    fetch("http://localhost:5000/cargaPaciente/"+(ruta.value)+"/"+tipo,
    {
        method:'POST',
        headers,
        body:
        `{
            "nombre":"a"
        }`
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error);
        }
    )
}


function cargaArchivoMedicina()
{
    let ruta = document.getElementById("rutaMedicinas")
    fetch("http://localhost:5000/carga/"+(ruta.value),
    {
        method:'POST',
        headers,
        body:
        `{
            "nombre":"a"
        }`
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error);
        }
    )
}

function actualizar()
{
    document.getElementById("cardsc").innerHTML='';
    let text=""
    fetch("http://localhost:5000/obtenerUsuarios")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla pacientes</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0;i<data.length;i++)
            {
                if(data[i].tipo=="1")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                        <td><a href="Visualizar.html"><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Visualizar" onclick="enviarModificar('${data[i].nombre}')"</a></td>
                        <td><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Eliminar"  onclick="eliminar('${data[i].nombre}')"</td>
                        <td><a href="ModificarAdmin.html"><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Modificar" onclick="enviarModificar('${data[i].nombre}','${data[i].tipo}')"</a></td>
                    </tr>
                    `
                }
                
            }
            text+="</table>"
            text+="<h3>Tabla enfermeras</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i<data.length;i++)
            {
                if(data[i].tipo=="2")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                        <td><a href="Visualizar.html"><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Visualizar" onclick="enviarModificar('${data[i].nombre}')"</a></td>
                        <td><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Eliminar" onclick="eliminar('${data[i].nombre}')"</td>
                        <td><a href="ModificarAdmin.html"><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Modificar" onclick="enviarModificar('${data[i].nombre}','${data[i].tipo}')"</a></td>

                    </tr>
                    `
                }
            }
            text+="</table>"
            text+="<h3>Tabla doctores</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i<data.length;i++)
            {
                if(data[i].tipo=="3")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                        <td><a href="Visualizar.html"><input type="button" id="${data[i].usuario}"  class="btn btn-primary" value="Visualizar" onclick="enviarModificar('${data[i].nombre}')"</a></td>
                        <td><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Eliminar" onclick="eliminar('${data[i].nombre}')"</td>
                        <td><a href="ModificarAdmin.html"><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Modificar" onclick="enviarModificar('${data[i].nombre}','${data[i].tipo}')"</a></td>
                    </tr>
                    `
                }
            }
            text+="</table>"

        document.getElementById("cardsc").innerHTML=text;
    });
}

function actualizarPDF()
{
    document.getElementById("cardsc").innerHTML='';
    let text=""
    fetch("http://localhost:5000/obtenerUsuarios")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla pacientes</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0;i<data.length;i++)
            {
                if(data[i].tipo=="1")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                    </tr>
                    `
                }
            }
            text+="</table>"
            text+="<h3>Tabla enfermeras</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i<data.length;i++)
            {
                if(data[i].tipo=="2")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                    </tr>
                    `
                }
            }
            text+="</table>"
            text+="<h3>Tabla doctores</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i<data.length;i++)
            {
                if(data[i].tipo=="3")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].telefono}</td>
                    </tr>
                    `
                }
            }
            text+="</table>"

        document.getElementById("cardsc").innerHTML=text;
    });
}

function mostrarTop5Medicamentos()
{
    document.getElementById("cardscTop5").innerHTML='';
    let text=""
    fetch("http://localhost:5000/top5medicamentos")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Top 5 medicamentos</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i < data.length; i++)
            {
                text+=
                `
                <tr>
                    <td>${i+1}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].cantidad}</td>
                    <td>${data[i].precio}</td>
                </tr>
                `
            }
            text+="</table>"

        document.getElementById("cardscTop5").innerHTML=text;
    });
}
function mostrarTop3Doctores()
{
    document.getElementById("cardscTop3").innerHTML='';
    let text=""
    fetch("http://localhost:5000/top3doctores")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Top 3 doctores</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i < data.length; i++)
            {
                text+=
                `
                <tr>
                    <td>${i+1}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].cantidad}</td>
                </tr>
                `
            }
            text+="</table>"

        document.getElementById("cardscTop3").innerHTML=text;
    });
}

function mostrarPadecimientos()
{
    document.getElementById("cardscPadecimientos").innerHTML='';
    let text=""
    fetch("http://localhost:5000/conteoEnfermedades")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Conteo padecimientos</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0; i < data.length; i++)
            {
                text+=
                `
                <tr>
                    <td>${data[i].padecimiento}</td>
                    <td>${data[i].cantidad}</td>
                </tr>
                `
            }
            text+="</table>"

        document.getElementById("cardscPadecimientos").innerHTML=text;
    });
}

var insertar;

function visualizar()
{
    fetch(`http://localhost:5000/recibirNombre`)
    .then(response =>response.json())
    .then(data =>   
    {
        insertar = data.nombre
        alert(data.nombre)
        mostrarDatos(data.nombre)
    })    
}

function mostrarDatos()
{
    alert("empezando"+insertar)
    fetch(`http://localhost:5000/usuarios/`+insertar)
    .then(response =>response.json())
    .then(data =>   
    {
        document.getElementById("cardscVisualizar").innerHTML='';
        text=
        `
        <table class="table table-light">
            <tr>
                <td>Nombre</td>
                <td>${data.nombre}</td>
            </tr>
            <tr>
                <td>Apellido</td>
                <td>${data.apellido}</td>
            </tr>
            <tr>
                <td>Fecha</td>
                <td>${data.fecha}</td>
            </tr>
            <tr>
                <td>Sexo</td>
                <td>${data.sexo}</td>
            </tr>
            <tr>
                <td>Usuario</td>
                <td>${data.usuario}</td>
            </tr>
            <tr>
                <td>Contrasenña</td>
                <td>${data.contrasena}</td>
            </tr>
            <tr>
                <td>Teléfono</td>
                <td>${data.telefono}</td>
            </tr>
        </table>
        `
        alert(text)
        document.getElementById("cardscVisualizar").innerHTML=text;
    })   
}

function eliminar(nombre)
{
    alert(nombre)
    fetch("http://localhost:5000/usuarios/"+nombre,
    {
        method:'DELETE',
        headers,
    })
    .then(response => response.json())
    .then(
        result=>
        {
            alert(result)
        }

    )
   .catch(
        error =>
        {
        console.error('Error:', error);
        }
    )
    alert("Eliminado")
}

function enviarModificar(nombre,tipo)
{
    alert(nombre)
    fetch("http://localhost:5000/enviarNombre/"+nombre+"/"+tipo,
    {
        method:'POST',
        headers,
        body:
        `{
            "nombre":"a"
        }`
           
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error)
        }
    )
    alert(nombre+"a")
}

function crearModificar()
{
    
    fetch(`http://localhost:5000/recibirNombre`)
    .then(response =>response.json())
    .then(data =>   
    {
        alert(data.nombre)
        document.getElementById("cardsc1").innerHTML='';
        text=`<input type="button" id="modificarUsuario" class="btn btn-primary" value="Modificar" onclick="modificar('${data.nombre}','${data.tipo}')">`
        document.getElementById("cardsc1").innerHTML=text;
    })      
}

function modificar(nombre,tipo)
{
    let nombrenuevo = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let fecha = document.getElementById("fecha");
    let sexo = document.getElementById("sexo");
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    let telefono = document.getElementById("telefono");
    alert(tipo)
    fetch("http://localhost:5000/usuarios/"+nombre,
    {
        method:'PUT',
        headers,
        body:
        `{
            "nombre":"${nombrenuevo.value}",
            "apellido":"${apellido.value}",
            "fecha":"${fecha.value}",
            "sexo":"${sexo.value}",
            "usuario":"${usuario.value}",
            "contrasena":"${contrasena.value}",
            "telefono":"${telefono.value}",
            "especialidad":"",
            "tipo":"${tipo}"
        }`
           
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
            nombrenuevo.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            contrasena.value=''
            telefono.value=''
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error)
            nombrenuevo.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            contrasena.value=''
            telefono.value=''
        }
    )
}

