import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = -31.611154940960258;
  lng = -60.677890491759044;


  constructor( private snackBar: MatSnackBar, public dialog: MatDialog ) {

    // const nuevoMarcador = new Marcador( -31.611154940960258, -60.677890491759044 );

    // this.marcadores.push( nuevoMarcador );

    if ( localStorage.getItem( 'marcadores' )) {

      this.marcadores = JSON.parse( localStorage.getItem( 'marcadores') );

      // console.log( this.marcadores );

    }
  }

  ngOnInit(): void {}

  agregarMarcador( event: any ) {

    // console.log( event.coords.lat, event.coords.lng );

    const coords: { lat: number, lng: number } = event.coords;

    const nuevoMarcadorClickeado = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcadorClickeado );

    this.guardarStorage();

    this.snackBar.open( 'Marcador agregado', 'Cerrar', { duration: 1500 } );


  }

  guardarStorage() {

    localStorage.setItem( 'marcadores', JSON.stringify( this.marcadores ) );

  }

  borrarMarcador( iMarcador: number ): void {

    this.marcadores.splice( iMarcador, 1);

    this.guardarStorage();

    this.snackBar.open( 'Marcador borrado', 'Cerrar', { duration: 1500 } );

  }

  editarMarcador( marcador: Marcador ) {

    const dialogRef = this.dialog.open( MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if ( !result ) {

        return;

      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open( 'Marcador actualizado', 'Cerrar', { duration: 1500 } );

    });
  }

}
