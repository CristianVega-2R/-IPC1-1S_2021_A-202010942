let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function crearUsuario()
{
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let fecha = document.getElementById("fecha");
    let sexo = document.getElementById("sexo");
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    let telefono = document.getElementById("telefono");
    alert("Usuario creado")
    fetch("http://localhost:5000/usuarios",
    {
        method:'POST',
        headers,
        body:
        `{
            "nombre":"${nombre.value}",
            "apellido":"${apellido.value}",
            "fecha":"${fecha.value}",
            "sexo":"${sexo.value}",
            "usuario":"${usuario.value}",
            "contrasena":"${contrasena.value}",
            "telefono":"${telefono.value}"
        }`   
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
            nombre.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            contrasena.value=''
            telefono.value=''
            alert('Usuario creado')
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error)
            nombre.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            contrasena.value=''
            telefono.value=''

        }
    )
}