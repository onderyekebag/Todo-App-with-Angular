export class Model{
    items;

    constructor(){
        this.items=[
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Ders",false),
            new TodoItem("Mola",true)
          ];
    }
}
export class TodoItem{
    gorev;
    durum;

    constructor(gorev:string, durum:boolean){
        this.gorev = gorev;
        this.durum = durum;
    }
}