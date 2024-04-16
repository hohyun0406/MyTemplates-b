'use client'

import { IArticle } from "@/app/components/article/model/article"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import {getArticleById} from '@/app/components/article/service/article-slice'
import {findArticleById} from '@/app/components/article/service/article-service'
import { CustomTypography } from "@/app/components/common/style/cell"
import { Button, Input, Typography } from "@mui/material"



export default function ArticleDetail({params} : any) {
    const dispatch = useDispatch()
    const article:IArticle = useSelector(getArticleById)

    useEffect(()=>{
        dispatch(findArticleById(params.id))
    },[])

    return(
        <div>
            <h3>{params.id}의 상세 페이지</h3>
            <span>Title</span>{CustomTypography(article.title,"1.5rem")}
            <span>content</span>{CustomTypography(article.content,"1.5rem")}
            <span>registerDate</span>{CustomTypography(article.registerDate,"1.5rem")}
        </div>
    )
}