export class Profesor {
    constructor(
        public _id: number = Math.floor(Math.random()* 100),
        public nombre: string = "",
        public apellido: string = "", 
        public email: string = "", 
        public editable: boolean = false
    ){


    }

}
