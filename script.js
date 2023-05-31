//Evaluacion #1
//Crear un sistema de guardado de tareas que permita al usuario agregar tareas y mostrarlas en el html.

//Crear una función agregarTarea en el objeto ListaTareas que tome la tarea ingresada como parámetro y la agregue al arreglo tareas.

//Crear una función mostrarTareas en el objeto ListaTareas que recorra el arreglo tareas y las muestre en el html.

const ListaTareas = {
  tareas: [],
  mostrarTareas: function () {
    let html = ''
    this.tareas.forEach((tarea) => {
      html += `<li>${tarea}</li>`
    })
    document.getElementById('lista-tareas').innerHTML = html
  },
  limpiarFormulario: function () {
    document.querySelector('#tarea').value = ''
  },

  agregarTarea: function () {
    let tarea = document.querySelector('#tarea').value
    this.tareas.push(tarea)
    this.mostrarTareas()
    this.limpiarFormulario()
  },
}
