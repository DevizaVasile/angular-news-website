export interface Roles
{
    reader:boolean;
    author?:boolean;
    redactor?:boolean;
}

export class User
{
    email:string;
    
    roles:Roles;

    constructor(authData)
    {
        this.email=authData.email; 
        this.roles={reader:true,author:false,redactor:false};
    }
}