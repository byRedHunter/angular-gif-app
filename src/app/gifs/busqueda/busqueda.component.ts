import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
    console.log(valor);
  }
}
