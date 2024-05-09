'use client'

import ArticleColumns from "@/app/components/article/module/article-columns";
import { findAllArticles } from "@/app/components/article/service/article-service";
import { getAllArticles } from "@/app/components/article/service/article-slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ArticlesPage: NextPage = () => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)
    
    useEffect(()=>{
        dispatch(findAllArticles(1))
    },[])
    
    return (<>
    <h2>아티끌 TABLE</h2>
          <div style={{ height: 400, width: "100%" }}>
      {allArticles && <DataGrid // 🔥 4
        rows={allArticles}
        columns={ArticleColumns()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>
    </>)
}

export default ArticlesPage