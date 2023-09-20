export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ){}

    get volume(){
        return this.valor * this.quantidade;
    }
    get data(): Date{
        return this._data;
    }
}


