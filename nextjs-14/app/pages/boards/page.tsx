'use client'

import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import { API } from '@/redux/common/enums/API';
import AxiosConfig from '@/redux/common/configs/axios-config';
const SERVER = 'http://localhost:8080'

import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";

// import React from "react";

import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";



interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const ArtilcesPage: NextPage = () => {
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
        dispatch(fetchAllArticles(1))
    }, [])
    
    return ( <>
        <h2>ARTICLE TABLE</h2>
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>내용</th>
                <th>작성자</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>{allArticles?.map(
              (props: IArticle) => 
       (<>
          <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
          </tr>
        </>
      ))}</tbody>
          </table>
        </>)
}

export default ArtilcesPage