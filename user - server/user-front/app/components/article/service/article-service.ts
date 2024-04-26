import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteByIdAPI, findAllArticlesAPI, findArticleByIdAPI, findArticlesByBoardAPI, saveNewArticleAPI } from "./article-api";


export const findAllArticles: any = createAsyncThunk(
  "articles/findAllArticles",
  async (page: number) => {
    console.log("findAllarticles page : " + page);
    const data : any = await findAllArticlesAPI(page);
    const {message, result}:any = data
    return data
  }
)
export const findArticleById : any = createAsyncThunk(
  'articles/findArticleById',
  async (id:number) => await findArticleByIdAPI(id) //이거 중괄호 의미?
)

export const findArticlesByBoardId: any = createAsyncThunk(
  "articles/findArticlesByBoardId",
  async (id: number) => {
    const data : any = await findArticlesByBoardAPI(id);
    return data
  }
)

export const saveNewArticle: any = createAsyncThunk(
  "articles/save-new-article",
  async (all : any) => {
    const data : any = await saveNewArticleAPI(all)
    return data
  }
)

export const deleteById:any = createAsyncThunk(
  "articles/delete",
  async (id : number) => await deleteByIdAPI(id)
)