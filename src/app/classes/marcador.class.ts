
export class Marcador {

    public lat: number;
    public lng: number;

    public titulo = '';
    public desc = '';
    public defaultTitulo = 'Complete los datos!';

    constructor( lat: number, lng: number ){

        this.lat = lat;
        this.lng = lng;

    }

}