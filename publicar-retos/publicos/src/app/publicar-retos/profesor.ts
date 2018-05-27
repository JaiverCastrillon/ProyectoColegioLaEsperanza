import { Materia } from "./materia";
import { Grado } from "./grado";

export class Profesor {
    constructor(
		public cc: String = "",
        public nombre: string = "",
        public apellido: string = "",
        public telefono: string = "",
        public correo: string = "",
        public clave: string = "",
        public materias: Array<Materia> = new Array<Materia>(),
        public grados: Array<Grado> = new Array<Grado>(),
        public grado_materia: Array<String> = new Array<String>(),
        public editable:boolean = false
	) {

	}
}
