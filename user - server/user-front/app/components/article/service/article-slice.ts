import { createSlice } from "@reduxjs/toolkit";
import  IArticle  from '../model/article';
import { findAllArticles, findArticleById, findArticlesByBoardId, saveNewArticle } from './article-service';

const articleThunks = [findAllArticles]
const status = {
    pending : 'pending',
    fulfilled: 'fulfilled',
    rejected : 'rejected'
}

export interface ArticleState{
    json?: IArticle,
    array? : IArticle[],
    resultMsg? : string
}

export const initialState:ArticleState = {
    json : {} as IArticle,
    array: [],
    resultMsg : ""
}

export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state:any, {payload}:any)=>{state.array=payload})
        .addCase(findArticlesByBoardId.fulfilled, (state:any, {payload}:any)=>{state.array=payload})
        .addCase(findArticleById.fulfilled, (state:any, {payload}:any)=>{state.json=payload})
        .addCase(saveNewArticle.fulfilled, (state:any, {payload}:any)=>{state.resultMsg=payload})
    }
})

export const getAllArticles = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array))
    return state.article.array;
} //result 지워버리면 length 오류는 없어짐.

export const getArticlesByBoardId = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array))
    return state.article.array;
} //result 지워버리면 length 오류는 없어짐.


export const getArticleById = (state:any) => {
    return state.article.json;
}

export const saveNewArticleResult = (state:any) => {
    return state.article.resultMsg
}

export const {} = articleSlice.actions

export default articleSlice.reducer;