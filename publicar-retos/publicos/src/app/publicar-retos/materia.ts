import { Tema } from "./tema";

export class Materia {
    constructor(
		public codigo: String = "",
        public temas: Array<Tema> = new Array<Tema>(),
		public nombre: string = ""
	) {

	}
}
