export interface IArticle{
    id? : number,
    title? : string,
    content? : string,
    registerDate? : string,
    wrtierId? : number,
    boardId? : number,
    regDate? : string
    modDate? : string,
    json?: IArticle,
    array? : IArticle[]
}