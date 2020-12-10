import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {'titulo': string, 'desc': string } ) { // le paso el tipo como una interface

      // console.log( data );

      this.form = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });

    }

  ngOnInit(): void {}

  guardarCambios(): void {

    // console.log( this.form.value );

    this.dialogRef.close( this.form.value );

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
