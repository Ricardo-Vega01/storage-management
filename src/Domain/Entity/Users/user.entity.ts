export class User {
    constructor(
        public readonly id: string,
        public name: string,
        public email: string,
    ) {}

    update(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}
