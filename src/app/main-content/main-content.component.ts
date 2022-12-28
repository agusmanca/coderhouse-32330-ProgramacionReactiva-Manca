import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription, tap } from 'rxjs';
import { Alumno } from './model/alumno-model';
import { Bandera } from './model/banderas-model';
import { AlumnoService } from './service/alumno.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy {

  showTable: boolean = false;
  alumnos$: Observable<Array<Alumno>> | undefined;
  banderas$: Observable<Array<Bandera>> | undefined;
  alumnosSubs: Subscription | undefined;
  banderasSubs: Subscription | undefined;
 
  constructor(private service: AlumnoService) {
  }

  ngOnInit(): void {    
  }

  ngOnDestroy(): void {
    this.alumnosSubs?.unsubscribe();
    this.banderasSubs?.unsubscribe();
  }
  
  subscribe(): void {
      this.alumnos$ = this.service.getAlumnosLst();
      this.banderas$ = this.service.getBanderas();

      this.alumnosSubs =  this.alumnos$.subscribe(dato => {
        this.showTable = true;
        console.log(dato);
      });

      this.banderasSubs = this.banderas$.subscribe((dato) => {
        console.log(dato);
      });
  }

  getBanderaPorId(id: number): Observable<string> | undefined {
      return this.banderas$?.pipe(
                                map((banderas: Bandera[]) => banderas.filter(b => b.id == id)[0]),
                                map((bandera: Bandera) => bandera.ruta ? bandera.ruta : '')
                            );
  }
}
