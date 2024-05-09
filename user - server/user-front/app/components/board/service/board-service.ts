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


