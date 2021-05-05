let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://130.211.213.9:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function modificar()
{
    location.href =`../Modificar/ModificarEnfermero.html`;
}

function pendientes()
{
    location.href="Pendientes.html"
}

function aceptados()
{
    location.href="Aceptados.html"
}

var texto=""

function listadoDoctores()
{
    fetch("http://130.211.213.9:5000/obtenerUsuarios")
    .then(response => response.json())
    .then(data=>
        {
            for(var i = 0; i < data.length; i++)
            {
                if(data[i].tipo=="3")
                {
                    texto+=
                    `
                    <option value="${i+1}">${data[i].nombre}</option>
                    `
                }
            }
        }
    )
}

function listadoPendiente()
{
    document.getElementById("cardsc").innerHTML='';
    let text=""
    fetch("http://130.211.213.9:5000/obtenerCitas")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla citas pendientes</h3>"
            text+=`<table class="table table-light">`
            text+=`<select class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${texto}</select>`
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

function listadoAceptado()
{
    document.getElementById("cardsc1").innerHTML='';
    let text=""
    fetch("http://130.211.213.9:5000/obtenerCitas")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tabla citas aceptadas</h3>"
            text+=`<table class="table table-light">`
            alert(data)
            for(var i = 0;i<data.length;i++)
            {
                if(data[i].estado=="Aceptado")
                {
                    text+=
                    `
                    <tr>
                        <td>${data[i].usuario}</td>
                        <td>${data[i].fecha}</td>
                        <td>${data[i].hora}</td>
                        <td>${data[i].motivo}</td>
                        <td><a href="Factura.html"><input type="button" class="btn btn-primary" id="generarFactura" value="Factura" onclick="guardarFactura('${data[i].id}')"></a></td>
                    </tr>
                    `
                }
            }
            text+="</table>"

        document.getElementById("cardsc1").innerHTML=text;
    });
}

function aceptar(idCita)
{
    var e = document.getElementById("dropdownMenuButton");
    alert(e)
    var doctor = e.options[e.selectedIndex].text;
    
    alert(doctor)
    fetch("http://130.211.213.9:5000/aceptar/"+idCita+"/"+doctor+"/Aceptado",
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
        var e = document.getElementById("dropdownMenuButton");
        alert(e)
        var doctor = e.options[e.selectedIndex].text;
        
        alert(doctor)
        fetch("http://130.211.213.9:5000/aceptar/"+idCita+"/"+doctor+"/Rechazado",
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

    function guardarFactura(idCita)
    {
        alert(idCita+"a")
        fetch("http://130.211.213.9:5000/recibirFactura/"+idCita,
            {
                method:'POST',
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
        alert("a")
    }

    function crearBotonFactura()
{
    
    let text=""
    fetch("http://130.211.213.9:5000/entregarFactura")
    .then(response => response.json())
    .then(data=>
        {
            document.getElementById("cardscFactura").innerHTML='';
            text=`<input type="button" id="recetar" class="btn btn-primary" value="Recetar" onclick="facturar('${data.id}')">`
            document.getElementById("cardscFactura").innerHTML=text;
    });
}

function facturar(id)
{
    let consulta = document.getElementById("consulta");
    let operacion = document.getElementById("operacion");
    let internado = document.getElementById("internado");
    let total = parseFloat(consulta.value)+parseFloat(operacion.value)+parseFloat(internado.value)
    document.getElementById("cardscFacturaGenerar").innerHTML='';

    fetch("http://130.211.213.9:5000/obtenerCitas")
    .then(response => response.json())
    .then(data=>
        {
            let text=""
            for(var i=0;i<data.length;i++)
            {
                if(parseInt(data[i].id)==parseInt(id))
                {
                    alert(data[i].id)
                    alert(id)
                    text+="<h3>Tabla citas aceptadas</h3>"
                    text+=`<table class="table table-light">`
                    for(var i = 0;i<data.length;i++)
                    {
                    if(data[i].estado=="Aceptado" &&  data[i].id==id)
                    {
                    text+=
                    `
                    <tr><td>id</td><td>${id}</td></tr></tr>
                    <tr><td>Usuario</td><td>${data[i].usuario}</td></tr>
                    <tr><td>Fecha</td><td>${data[i].fecha}</td></tr>
                    <tr><td>Doctor</td><td>${data[i].doctor}</td></tr>
                    <tr><td>Consulta</td><td>${consulta.value}</td></tr>
                    <tr><td>Operacion</td><td>${operacion.value}</td></tr>
                    <tr><td>Internado</td><td>${internado.value}</td></tr>
                    <tr><td>Total</td><td>${total}</td></tr>
                    `
                    }
                }
                text+="</table>"
                }
            }
            document.getElementById("cardscFacturaGenerar").innerHTML=text;
        });
}