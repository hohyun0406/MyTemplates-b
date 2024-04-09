'use client'

import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";

const SERVER = 'http://localhost:8080'

import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";

// import React from "react";

import { findAllArticles } from "@/app/components/article/service/article-service";
import { getAllArticles } from "@/app/components/article/service/article-slice";
import Columns from '@/app/components/article/columns';
import { Box } from '@mui/material';



interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const ArtilcesPage: NextPage = ({data}:any) => {
    const dispatch = useDispatch()

    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not undefined')
        
        console.log('length is '+ allArticles.length)
        for(let i=0; i< allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }
    

    useEffect(() => {
        dispatch(findAllArticles(1))
    }, [])
    
    return (<Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={Columns()}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>)
}

export default ArtilcesPage