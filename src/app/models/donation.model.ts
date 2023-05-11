export class Donation{
    constructor(
        public id:string,
        public bloodGroup:string,
        public firstName:string,
        public lastName:string,
        public gender:string,
        public phoneNumber:number,
        public userId:string,
        public hospitalAdress:string,
        public hospitalCity:string,
        public date:string,
        public donateTo:string
        ){}
}