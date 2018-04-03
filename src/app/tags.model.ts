export class Tags {


    constructor(public tagList:string[])
    {

    }

    public addTag(tag:string)
    {
        let index:number = this.tagList.indexOf(tag);
        
        if (index == (-1))
        {
            this.tagList.push(tag);    
        }
        
    }

    public removeTag(tag:string)
    {
        let index:number = this.tagList.indexOf(tag);

        if (index > (-1))
        {
            this.tagList.splice(index,1);
        }

    }

    public toString()
    {
        return this.tagList.toString();

    }
}
