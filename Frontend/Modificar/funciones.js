let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

var nombreUsuario=null



function generarBotonPaciente()
{
    let texto='';
    fetch(`http://localhost:5000/solicitar`)
    .then(response =>response.json())
    .then(data =>   
    {
        document.getElementById("cardsc").innerHTML='';
        texto+=`<input type="button" id="modificarUsuario" class="btn btn-primary" value="Modificar" onclick="modificarPaciente('${data.nombre}')">`
        document.getElementById("cardsc").innerHTML=texto;
        alert(texto)
    })       
}
function generarBotonEnfermeros()
{
    let texto='';
    fetch(`http://localhost:5000/solicitar`)
    .then(response =>response.json())
    .then(data =>   
    {
        document.getElementById("cardsc").innerHTML='';
        texto+=`<input type="button" id="modificarUsuario" class="btn btn-primary" value="Modificar" onclick="modificarEnfermero('${data.nombre}')">`
        document.getElementById("cardsc").innerHTML=texto;
        alert(texto)
    })       
}
function generarBotonDoctor()
{
    let texto='';
    fetch(`http://localhost:5000/solicitar`)
    .then(response =>response.json())
    .then(data =>   
    {
        document.getElementById("cardsc").innerHTML='';
        texto+=`<input type="button" id="modificarUsuario" class="btn btn-primary" value="Modificar" onclick="modificarDoctor('${data.nombre}')">`
        document.getElementById("cardsc").innerHTML=texto;
        alert(texto)
    })       
}
    
function modificarPaciente(nombreUsuario)
{
    alert(nombreUsuario+"a")
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let fecha = document.getElementById("fecha");
    let sexo = document.getElementById("sexo");
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    let telefono = document.getElementById("telefono");

    alert(nombreUsuario+"a")
    fetch("http://localhost:5000/usuarios/"+nombreUsuario,
    {
        method:'PUT',
        headers,
        body:
        `{
            "nombre":"${nombre.value}",
            "apellido":"${apellido.value}",
            "fecha":"${fecha.value}",
            "sexo":"${sexo.value}",
            "usuario":"${usuario.value}",
            "contrasena":"${contrasena.value}",
            "telefono":"${telefono.value}",
            "especialidad":"",
            "tipo":"1"
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
}

function modificarEnfermero(nombreUsuario)
{
    alert(nombreUsuario+"a")
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let fecha = document.getElementById("fecha");
    let sexo = document.getElementById("sexo");
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    let telefono = document.getElementById("telefono");

    alert(nombreUsuario+"a")
    fetch("http://localhost:5000/usuarios/"+nombreUsuario,
    {
        method:'PUT',
        headers,
        body:
        `{
            "nombre":"${nombre.value}",
            "apellido":"${apellido.value}",
            "fecha":"${fecha.value}",
            "sexo":"${sexo.value}",
            "usuario":"${usuario.value}",
            "contrasena":"${contrasena.value}",
            "telefono":"${telefono.value}",
            "especialidad":"",
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
}
function modificarDoctor(nombreUsuario)
{
    alert(nombreUsuario+"a")
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let fecha = document.getElementById("fecha");
    let sexo = document.getElementById("sexo");
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    let telefono = document.getElementById("telefono");

    alert(nombreUsuario+"a")
    fetch("http://localhost:5000/usuarios/"+nombreUsuario,
    {
        method:'PUT',
        headers,
        body:
        `{
            "nombre":"${nombre.value}",
            "apellido":"${apellido.value}",
            "fecha":"${fecha.value}",
            "sexo":"${sexo.value}",
            "usuario":"${usuario.value}",
            "contrasena":"${contrasena.value}",
            "telefono":"${telefono.value}",
            "especialidad":"",
            "tipo":"3"
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
}