import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI, findBoardByIdApi } from "./board-api";


export const findAllBoards: any = createAsyncThunk(
  "boards/findAllBoards",
  async (page: number) => {
    const data : any = await findAllBoardsAPI(page);
    return data
  }
)

export const findBoardById : any = createAsyncThunk(
  "boards/findBoardById",
  async (id : number) => await findBoardByIdApi(id)
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

