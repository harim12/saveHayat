export class User{
    constructor(
        public email:string,
        public password:string,
        public firstName?:string,
        public lastName?:string,
        public gender?: string,
        public bloodGroup?:string,
        public dateOfBirth?:string,
        public mobileNumber?:number
    ){}
}