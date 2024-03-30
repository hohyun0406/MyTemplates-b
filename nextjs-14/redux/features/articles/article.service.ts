import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";
import axios from "axios";
import { API } from "@/redux/common/enums/API";
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config";

export const getAllArticles: any = createAsyncThunk(
  "articles/getAllArticles",
  async (page: number, { rejectWithValue }) => {
    console.log("getArticles page : " + page);

    const {message, result}:any = getAllArticlesAPI(1);
    console.log('------------API를 사용한 경우--------')
    console.log('message : ' + message)
    console.log(JSON.stringify(result))



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
  })
