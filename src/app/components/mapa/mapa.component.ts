import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = -31.611154940960258;
  lng = -60.677890491759044;

  constructor() { }

  ngOnInit(): void {
  }

}
