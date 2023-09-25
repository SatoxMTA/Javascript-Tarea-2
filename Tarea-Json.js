/*
Crea una página web que muestre una lista de estudiantes y sus promedios. La página debe realizar las siguientes tareas:

1. Mostrar la lista de 10 estudiantes.
2. Resaltar en color verde a los estudiantes que tengan un promedio de 10.
3. Calcular el promedio general de la clase y mostrarlo en algún lugar de la pagina.
*/

const estudiantesJSON = '{"estudiantes":[{"nombre":"Juan","promedio":7},{"nombre":"Pedro","promedio":9},{"nombre":"Maria","promedio":8},{"nombre":"Carlos","promedio":10},{"nombre":"Ana","promedio":7},{"nombre":"Pablo","promedio":10},{"nombre":"Matias","promedio":6},{"nombre":"Ezequiel","promedio":8},{"nombre":"Florencia","promedio":9},{"nombre":"Roxana","promedio":7} ]}'
const clase = JSON.parse(estudiantesJSON)
let container = document.querySelector(".container")
const promedioGeneral = document.querySelector("#promedioGeneral");


clase.estudiantes.forEach(estudiante => {
    let estudianteHTMLTabla = ""
    if (estudiante.promedio === 10) {
        estudianteHTMLTabla = `<tr> <td style="background-color: green">${estudiante.nombre}</td> <td style="background-color: green">${estudiante.promedio}</td> </tr>`
    } else {
        estudianteHTMLTabla = `<tr> <td>${estudiante.nombre}</td> <td>${estudiante.promedio} </td> </tr>`
    }
    container.insertAdjacentHTML("afterbegin", estudianteHTMLTabla)
    
});

let contador = 0
let acumulador = 0
let listaEstudiantes = clase.estudiantes

for (let i = 0; i < listaEstudiantes.length; i++) {
    const estudianteActual = listaEstudiantes[i];
    let promedioActual = estudianteActual.promedio
    contador++;
    acumulador = acumulador + promedioActual
}

let promedio = acumulador / contador
promedioGeneral.insertAdjacentHTML("afterbegin", promedio)