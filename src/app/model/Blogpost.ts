export class BlogPost{
    titre: string = "";
    corps: string = "";
    //photo: string = "";
    date: Date | any = null;
    commentaires: string[] = [];

    constructor(titre: string, corps: string, date: Date | null, commentaires: string[]){
        this.titre = titre;
        this.corps = corps;
        this.date = date;
        this.commentaires = [...commentaires];
    }
    

    getTitre(): string{
        return this.titre;
    }
    setTitre(titre: string): void{
        this.titre = titre;
    }
    
    getCorps(): string{
        return this.corps;
    }
    setCorps(corps: string): void{
        this.corps = corps;
    }

    getDate(): Date{
        return this.date
    }
    setDate(date: Date): void{
        this.date = date;
    }

    getCommentaires(): string[]{
        return this.commentaires;
    }
    setCommentaire(comms: string[]): void{
        this.commentaires = [...comms];
    }

}