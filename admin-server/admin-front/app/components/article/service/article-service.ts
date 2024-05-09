import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../model/article";
import { findAllArticlesAPI, findArticleByIdAPI } from "./article-api";
import axios from "axios";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig, { instance } from "@/app/components/common/configs/axios-config";

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
  async (id:number) => await findArticleByIdAPI(id)
)


    // console.log('------------API를 사용한 경우--------')
    // console.log('message : ' + message)
    // console.log(JSON.stringify(result))


  //   try {
  //     const { allArticles }: any = getAllArticlesAPI(page);
  //     return allArticles;
  //   instance(`/all-articles`, AxiosConfig())
  //           .then(res => {
  //               const {result, message} = res.data
  //               console.log('message : ' +(message))
  //               console.log('result : ' +JSON.stringify(result))

  //               if (message === 'SUCCESS') {
  //                   console.log("게시글이 있습니다.")
  //                   const arr = res.data.result
  //                   for (let i of arr) {
  //                       console.log(i)
  //                       //setArticles(res.data.result)
  //                   }

  //               } else if (message === 'FAIL') {
  //                   console.log("게시글이 없습니다.")
  //               } else {
  //                   console.log("지정되지 않은 값")
  //               }
  //               return res.data
  //           })
  //   } catch (error) {
  //     console.log("getArticles error" + error);
  //     return rejectWithValue(error);
  //   }
  // }

