import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from '../model/alumno-model';
import { Bandera } from '../model/banderas-model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
    constructor() { }

    private alumnos: Array<Alumno> = [
        {
            nombre: "Agustin",
            apellido: "Test",
            edad: 33,
            fechaNacimiento: new Date('1989-01-19'),
            pais: 1
        },
        {
            nombre: "John",
            apellido: "Doe",
            edad: 25,
            fechaNacimiento: new Date('1998-07-04'),
            pais: 2
        },  
        {
            nombre: "Leonel",
            apellido: "Messi",
            edad: 34,
            fechaNacimiento: new Date('1987-06-24'),
            pais: 1
        },  
        {
            nombre: "Carlos",
            apellido: "Gomez",
            edad: 28,
            fechaNacimiento:  new Date('1995-02-12'),
            pais: 3
        },  
        {
            nombre: "Ricardo",
            apellido: "Guemes",
            edad: 40,
            fechaNacimiento: new Date('1983-04-27'),
            pais: 4
        },
        {
          nombre: "Jack",
          apellido: "Sparrow",
          edad: 40,
          fechaNacimiento: new Date('1983-04-27'),
          pais: 5
        }
    ]

    public banderas: Array<Bandera> = [
        {
          id: 1,
          descripcion: 'argentina',
          ruta: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'
        },
        {
          id: 2,
          descripcion: 'estados unidos',
          ruta: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
        },
        {
          id: 3,
          descripcion: 'mexico',
          ruta: 'https://s1.thingpic.com/images/Gk/bjHCMGpAzCSCauUh1n3e97dU.gif'
        },
        {
          id: 4,
          descripcion: 'peru',
          ruta: 'https://www.banderasdelmundo.net/wp-content/uploads/2019/08/bandera-del-peru.jpg'
        },
        {
          id: 5,
          descripcion: 'default',
          ruta: 'https://http2.mlstatic.com/D_NQ_NP_837465-MLA31576186983_072019-O.jpg'
        }
    ];

    getAlumnosLst(): Observable<Array<Alumno>> {
        return of(this.alumnos);
    }

    getBanderas(): Observable<Array<Bandera>> {
        return of(this.banderas);
    }
}

