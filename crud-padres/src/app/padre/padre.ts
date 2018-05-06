export class Padre {
    constructor(
        public _id: number = Math.floor(Math.random() *100),
        public cedula: number = null,
        public nombre: string= "",
        public apellidos: string= "",
        public id_hijo: number = null,
        public telefono: number = null,
        public correo: string= "",
        public editable: boolean = false
    ){

    }
}
