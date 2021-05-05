from Usuario import Usuario
from Medicina import Medicina
from Cita import Cita
from Receta import Receta
from Top3 import Top3
import json
import re

class Gestor:
    def __init__(self):
        self.idCita=0
        self.usuarios=[]
        self.medicinas=[]
        self.citas=[]
        self.nombreUsuario  = ""
        self.nombreAdmin = ""
        self.idFactura = ""
        self.tipo = ""
        self.recetas=[]
        self.pedido=[]
        self.idCitaRecetada=0
        self.usuarios.append(Usuario("Cristian", "Vega", "07/10/2000","M","Cristian2000","1234","12346781","","1"))
        self.usuarios.append(Usuario("Cristian1", "Vega1", "08/10/2000","M","Cristian2001","1234","12346782","","2"))
        self.usuarios.append(Usuario("Cristian2", "Vega2", "09/10/2000","M","Cristian2002","1234","12346783","","3"))
        self.usuarios.append(Usuario("Cristian3", "Vega3", "10/10/2000","M","Cristian2003","1234","12346784","","1"))
        self.usuarios.append(Usuario("Cristian4", "Vega4", "11/10/2000","M","Cristian2004","1234","12346780","","1"))
        self.medicinas.append(Medicina("A1",250,"A3",62,0))
        self.medicinas.append(Medicina("B1",100,"B3",14,0))
        self.medicinas.append(Medicina("C1",600,"C3",35,0))
        self.medicinas.append(Medicina("D1",200,"C3",15,0))
        self.medicinas.append(Medicina("F1",100,"C3",25,0))
        self.medicinas.append(Medicina("G1",60,"C3",54,0))
        self.medicinas.append(Medicina("H1",20,"C3",52,0))
        self.medicinas.append(Medicina("I1",10,"C3",51,0))
        self.medicinas.append(Medicina("J1",250,"C3",55,0))
        self.medicinas.append(Medicina("K1",30,"C3",3,0))
        self.medicinas.append(Medicina("L1",80,"C3",2,0))
        self.recetas.append(Receta("fdsa","Padecimiento1","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento1","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento1","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento2","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento3","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento4","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento6","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento3","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento1","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento2","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento0","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento3","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento4","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento4","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento5","fdsafsda"))
        self.recetas.append(Receta("fdsa","Padecimiento6","fdsafsda"))
    def crearUsuario(self,nombre, apellido, fecha, sexo, usuario, contrasena, telefono,especialidad,tipo):
        existe=False
        for x in self.usuarios:
            if x.usuario==usuario:
                existe=True
        if (existe==False):
            self.usuarios.append(Usuario(nombre,apellido,fecha,sexo,usuario,contrasena,telefono,"","1"))

    def obtenerUsuarios(self):
        return json.dumps([ob.__dict__ for ob in self.usuarios])

    def actualizarUsuario(self,nombrenuevo, nombre, apellido, fecha, sexo, usuario, contrasena, telefono,especialidad,tipo):
        for x in self.usuarios:
            if x.nombre==nombre:
                self.usuarios[self.usuarios.index(x)]=Usuario(nombrenuevo,apellido,fecha,sexo,usuario,contrasena,telefono,especialidad,tipo)
                return True
        return False

    def eliminarUsuario(self,nombre):
        for x in self.usuarios:
            if x.nombre==nombre:
                self.usuarios.remove(x)
                return True
        return False

    def buscarUsuario(self,nombre):
        for x in self.usuarios:
            if x.nombre==nombre:
                return json.dumps(x.__dict__)
        return 'Usuario no existe'

    def loginUsuario(self,usuario,contrasena):
        for x in self.usuarios:
            if  x.usuario==usuario and x.contrasena==contrasena:
                self.nombreUsuario=x.nombre
                return json.dumps(x.__dict__)
        return '{"nombre": "false"}'

    def getUsuario(self):
        return '{"nombre": "' + self.nombreUsuario +'"}'

    def setNombreAdmin(self,nombreAdmin, tipo):
        self.nombreAdmin=nombreAdmin
        self.tipo=tipo

    def getNombreAdmin(self):
        return '{"nombre": "'+self.nombreAdmin+'","tipo":"'+self.tipo+'"}'

    def cargaMasivaMedicina(self, ruta):
        archivo = open(ruta)
        texto = archivo.read()

        listaObjetos = texto.split('\n')
        objetos = len(listaObjetos)

        texto = texto.replace('\n',',')
        listaDatos = texto.split(',')

        a=0
        for i in listaObjetos:  
            self.medicinas.append(Medicina(listaDatos[0+((a+1)*4)],listaDatos[1+((a+1)*4)],listaDatos[2+((a+1)*4)],int(listaDatos[3+((a+1)*4)]),0))  
            a=a+1
        
        return 'Carga masiva completada'

    def obtenerMedicinas(self):
        return json.dumps([ob.__dict__ for ob in self.medicinas])

    def cargaMasiva(self, ruta,tipo):
        archivo = open(ruta)
        texto = archivo.read()
 
        listaObjetos = texto.split('\n')
        objetos = len(listaObjetos)

        texto = texto.replace('\n',',')
        listaDatos = texto.split(',')

        a=0
        for i in listaObjetos:  
            self.usuarios.append(Usuario(listaDatos[0+(8*(a+1))],listaDatos[1+(8*(a+1))],listaDatos[2+(8*(a+1))],listaDatos[3+(8*(a+1))],listaDatos[4+(8*(a+1))],listaDatos[5+(8*(a+1))],listaDatos[6+(8*(a+1))],listaDatos[7+(8*(a+1))],str(tipo)))  
            a=a+1
        return 'Carga masiva completada'

    def cargaMasivaPaciente(self, ruta,tipo):
        archivo = open(ruta)
        texto = archivo.read()
 
        listaObjetos = texto.split('\n')
        objetos = len(listaObjetos)

        texto = texto.replace('\n',',')
        listaDatos = texto.split(',')

        a=0 
        for i in listaObjetos:  
            self.usuarios.append(Usuario(listaDatos[0+(7*(a+1))],listaDatos[1+(7*(a+1))],listaDatos[2+(7*(a+1))],listaDatos[3+(7*(a+1))],listaDatos[4+(7*(a+1))],listaDatos[5+(7*(a+1))],listaDatos[6+(7*(a+1))],"",str(tipo)))  
            a=a+1
        return 'Carga masiva completada'
    
    def agregarCita(self,usuario,fecha,hora,motivo):
        existe=False
        for x in self.citas:
            if x.usuario==usuario and (x.estado=="Pendiente" or x.estado=="Aceptado"):
                print('encontré')
                existe=True
            else:
                print('no encontré')
        if existe==False:
            self.idCita=self.idCita+1
            self.citas.append(Cita(usuario,fecha,hora,motivo,"Pendiente",self.idCita,""))    
    
    def obtenerCitas(self):
        return json.dumps([ob.__dict__ for ob in self.citas])

    def aceptar(self,cita,doctor,estadoNuevo):
        for x in self.citas:
            if cita==str(x.id):
                self.citas[self.citas.index(x)].estado=estadoNuevo
                self.citas[self.citas.index(x)].doctor=doctor
                return True
        return False
                
    def setCitaRecetada(self,idCitaRecetada):
        self.idCitaRecetada=idCitaRecetada

    def getCitaRecetada(self):
        return '{"nombre": "' + str(self.idCitaRecetada) +'"}'

    def agregarReceta(self,nombrePaciente,padecimiento,descripcion):
        for x in self.citas:
            if x.usuario==nombrePaciente:
                self.citas[self.citas.index(x)].estado="Completado"
        self.recetas.append(Receta(nombrePaciente,padecimiento,descripcion))
        return '[receta agregada]'

    def obtenerRecetas(self):
        return json.dumps([ob.__dict__ for ob in self.recetas])

    def setIdFactura(self,idFactura):
        self.idFactura=idFactura
    
    def getFacturaRecetada(self):
        return '{"id": "' + self.idFactura +'"}'

    def comprarMedicina(self,nombre):
        posible=False
        for x in self.medicinas:
            if x.nombre == nombre and x.cantidad > 0:
                posible=True
        if posible==True: 
            self.pedido.append(nombre)
            for x in self.medicinas:
                if x.nombre == nombre:
                    self.medicinas[self.medicinas.index(x)].cantidad=self.medicinas[self.medicinas.index(x)].cantidad-1
                    self.medicinas[self.medicinas.index(x)].vendidos=self.medicinas[self.medicinas.index(x)].vendidos+1
            return '[item agregado]'
        return '[no es posible agregar el item]'
    
    def finalizarCompra(self):
        texto=""
        items=0

        for x in self.medicinas:
            for nombre in self.pedido[0:]:
                if x.nombre==nombre:
                    items=items+1
                    break
        llenados =0
        texto+='['
        for x in self.medicinas:
            cantidad=0
            
            for nombre in self.pedido[0:]:
                if x.nombre==nombre:
                    cantidad=cantidad+1
            if cantidad != 0 and llenados != items-1:
                llenados=llenados+1
                texto=texto+'{"precio": "' + str(x.precio)+'", "cantidad": "'+str(cantidad)+'", "nombre":"'+x.nombre+'"}, '
            elif cantidad != 0:
                texto=texto+'{"precio": "' + str(x.precio)+'", "cantidad": "'+str(cantidad)+'", "nombre":"'+x.nombre+'"}]'
        print(texto+"gestor")
        return texto
    
    def top5medicamentos(self):
        medicinasOrdenado=sorted(self.medicinas, key=lambda x: x.vendidos, reverse=True)
        a=0
        texto="["
        for x in medicinasOrdenado:
            a=a+1
            if a==len(medicinasOrdenado) or a==5:
                texto=texto+'{"precio": "' + str(x.precio)+'", "cantidad": "'+str(x.vendidos)+'", "nombre":"'+x.nombre+'"}] '
                break
            else:
                texto=texto+'{"precio": "' + str(x.precio)+'", "cantidad": "'+str(x.vendidos)+'", "nombre":"'+x.nombre+'"}, '
        return texto
    
    def top3doctores(self):
        texto="["
        items=0
        llenados=0
        top3doctores=[]
        for i in self.usuarios:
                for j in self.citas:
                    if i.tipo=="3":
                        if i.nombre==j.doctor:
                            items=items+1
                            break
        for i in self.usuarios:
            cantidad=0
            if i.tipo =="3":
                for j in self.citas:
                    if i.nombre==j.doctor:
                        cantidad=cantidad+1

            if cantidad != 0 and llenados == items-1:
                top3doctores.append(Top3(i.nombre,cantidad))
            elif cantidad != 0:
                llenados=llenados+1
                top3doctores.append(Top3(i.nombre,cantidad))
        top3doctoresOrdenado=sorted(top3doctores, key=lambda x: x.cantidad, reverse=True)
        return json.dumps([ob.__dict__ for ob in top3doctoresOrdenado])
        
    def mostrarEnfermedades(self):
        listaNombres=[]
        cantidad=1
        texto="["
        nombresOrdenados=sorted(self.recetas, key=lambda x: x.padecimiento, reverse=True)
        for x in range(len(self.recetas)):
            if len(self.recetas)!=x+1 and nombresOrdenados[x].padecimiento==nombresOrdenados[x+1].padecimiento:
                cantidad=cantidad+1
            elif len(self.recetas)==x+1:
                texto+='{"padecimiento": "' +nombresOrdenados[x].padecimiento +'", "cantidad": "'+ str(cantidad) +'"}]'  
            else:
                texto+='{"padecimiento": "' +nombresOrdenados[x].padecimiento +'", "cantidad": "'+ str(cantidad) +'"},'
                cantidad=1
        return texto
    
    def cargamasiva(self,data,tipo):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            print("hola")
            self.usuarios.append(Usuario(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6],"",str(tipo)))
            i = i+1 
    
    def cargamasivadoctores(self,data,tipo):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            print("hola")
            self.usuarios.append(Usuario(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6],texto[7],str(tipo)))
            i = i+1

    def cargamasivamedicinas(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            print("hola")
            self.medicinas.append(Medicina(texto[0],texto[1],texto[2],texto[3],0))
            i = i+1 

            

