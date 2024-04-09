import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "../model/board";
import { findAllBoardsAPI } from "./board-api";
import axios from "axios";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig, { instance } from "@/app/components/common/configs/axios-config";

export const findAllBoards: any = createAsyncThunk(
  "boards/findAllBoards",
  async (page: number) => {
    console.log("findAllboards page : " + page);
    const data : any = await findAllBoardsAPI(1);

    const {message, result}:any = data

    return data
  }
)


    // console.log('------------API를 사용한 경우--------')
    // console.log('message : ' + message)
    // console.log(JSON.stringify(result))


  //   try {
  //     const { allBoards }: any = getAllBoardsAPI(page);
  //     return allBoards;
  //   instance(`/all-boards`, AxiosConfig())
  //           .then(res => {
  //               const {result, message} = res.data
  //               console.log('message : ' +(message))
  //               console.log('result : ' +JSON.stringify(result))

  //               if (message === 'SUCCESS') {
  //                   console.log("게시글이 있습니다.")
  //                   const arr = res.data.result
  //                   for (let i of arr) {
  //                       console.log(i)
  //                       //setBoards(res.data.result)
  //                   }

  //               } else if (message === 'FAIL') {
  //                   console.log("게시글이 없습니다.")
  //               } else {
  //                   console.log("지정되지 않은 값")
  //               }
  //               return res.data
  //           })
  //   } catch (error) {
  //     console.log("getBoards error" + error);
  //     return rejectWithValue(error);
  //   }
  // }

