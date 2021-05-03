let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function pendientes()
{
    location.href="Pendientes.html"
}

function completadas()
{
    location.href="Aceptados.html"
}

function modificarUsuario()
{
    location.href="../Modificar/ModificarDoctor.html"
}

var texto=""

function listadoDoctores()
{
    fetch("http://localhost:5000/solicitar")
    .then(response => response.json())
    .then(data=>
        {   
            doctor=data.nombre
            texto=`<h6>${data.nombre}</h6>`
        })
}

function listadoPendiente()
{
    document.getElementById("cardsc").innerHTML='';
    let text=""
    fetch("http://localhost:5000/obtenerCitas")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla citas pendientes</h3>" 
            text+=`<table class="table table-light">`
            text+=texto
            for(var i = 0;i<data.length;i++)
            {
                if(data[i].estado=="Pendiente")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].fecha}</td>
                        <td>${data[i].hora}</td>
                        <td>${data[i].motivo}</td>
                        <td><input type="button" class="btn btn-primary" id="aceptar" value="Aceptar" onclick="aceptar('${data[i].id}')"></td>
                        <td><input type="button" class="btn btn-primary" id="declinar" value="Declinar" onclick="declinar('${data[i].id}')"></td>
                    </tr>
                    `
                }
            }
            text+="</table>"

        document.getElementById("cardsc").innerHTML=text;
    });
}

function aceptar(idCita)
{
    alert(doctor)
    fetch("http://localhost:5000/aceptar/"+idCita+"/"+doctor+"/Aceptado",
        {
            method:'PUT',
            headers
        } 
    )
    .then(response => response.json())
    .then(
        result =>
        {
            console.log(result);
        }
    )
    .catch(
        error=>
        {
            console.error(error)
        }
    )
}

function declinar(idCita)
{
    alert(doctor)
    fetch("http://localhost:5000/aceptar/"+idCita+"/"+doctor+"/Rechazado",
        {
            method:'PUT',
            headers
        } 
    )
    .then(response => response.json())
    .then(
        result =>
        {
            console.log(result);
        }
    )
    .catch(
        error=>
        {
            console.error(error)
        }
    )
}

function listadoAceptado()
{
    document.getElementById("cardsc1").innerHTML='';
    let text=""
    fetch("http://localhost:5000/obtenerCitas")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla citas pendientes</h3>" 
            text+=`<table class="table table-light">`
            text+=texto
            
            for(var i = 0;i<data.length;i++)
                {
                if(data[i].estado=="Aceptado" && data[i].doctor==doctor)
                {
                    alert(data[i].usuario)
                    text+=
                    `
                    <tr>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].fecha}</td>
                        <td>${data[i].hora}</td>
                        <td>${data[i].motivo}</td>
                        <td>${data[i].estado}</td>
                        <td><input type="button" id="recetar" class="btn btn-primary" value="Recetar" onclick="recetar('${data[i].usuario}')">
                    </tr>
                    `
                }
            }
            text+="</table>"

        document.getElementById("cardsc1").innerHTML=text;
    });
}

var nombrePrueba=""

function recetar(idCita)
{
    nombrePrueba=idCita
    alert(idCita+"A")
    fetch("http://localhost:5000/recibirCita/"+idCita,
    {
        method:'POST',
        headers,
        body:
        `{
            "tipo":"2"
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
    alert("a")
    location.href="Recetas.html"
}

function crearBotonRecetar()
{
    document.getElementById("cardscRecetar").innerHTML='';
    let text=""
    fetch("http://localhost:5000/entregarCita")
    .then(response => response.json())
    .then(data=>
        {
            alert(data.nombre)
            text=`<input type="button" id="recetar" class="btn btn-primary" value="Recetar" onclick="agregarReceta('${data.nombre}')">`
            alert(text)        
            document.getElementById("cardscRecetar").innerHTML=text;
        });
}

function agregarReceta(nombre)
{
    let padecimiento = document.getElementById("padecimiento");
    let descripcion = document.getElementById("descripcion");
    alert(padecimiento.value)
    alert(descripcion.value)
    alert(nombre)
    alert("pen4e")
    fetch("http://localhost:5000/agregarReceta/"+nombre+"/"+padecimiento.value+"/"+descripcion.value,
    {
        method:'POST',
        headers,
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
}