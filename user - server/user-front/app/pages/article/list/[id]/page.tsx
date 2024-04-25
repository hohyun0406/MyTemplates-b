"use client";

import MoveButton from "@/app/atoms/button/MoveButton";
import ArticleColumns from "@/app/components/article/module/article-columns";
import { findArticlesByBoardId } from "@/app/components/article/service/article-service";
import { getArticlesByBoardId } from "@/app/components/article/service/article-slice";
import { PG } from "@/app/components/common/enums/PG";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ArticlesPage(props: any) {
  const dispatch = useDispatch();
  const articlesByBoardId: [] = useSelector(getArticlesByBoardId);

  if (articlesByBoardId !== undefined) {
    console.log("articlesByBoardId is defined");
    console.log(articlesByBoardId);
    console.log(props);
  } else {
    console.log("articlesByBoardId is undefined");
  }

  useEffect(() => {
    dispatch(findArticlesByBoardId(props.params.id));
  }, []);

  return (
    <>
      <MoveButton text="게시글 작성" path={`${PG.ARTICLE}/save`} />
      <div style={{ height: 400, width: "100%" }}>
        {articlesByBoardId && (
          <DataGrid // 🔥 4
            rows={articlesByBoardId}
            columns={ArticleColumns()}
            pageSizeOptions={[5, 10, 20]} // 4-1
            checkboxSelection
          />
        )}
      </div>
    </>
  );
}
