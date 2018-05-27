export class Reto {
    constructor(
		public codigo: String = "",
        public tiempo: number = 0,
        public estado: boolean = false,
        public grado_id: string = "",
        public preguntas: Array<String> = new Array<String>()
	) {

	}
}
