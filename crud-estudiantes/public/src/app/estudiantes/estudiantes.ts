export class Estudiantes {
    constructor(
        public _id: number = Math.floor(Math.random() * 100),
        public documento: number = null,
        public nombre: string = "",
        public apellidos: string = "",
        public grado: number = null,
        public salon: string = "",
        public correo: string = "",
        public edad: number = null,
        public celular: number = null,
        public editable: boolean = false
    ){

    }
}
