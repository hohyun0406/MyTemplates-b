"use client";

import { IArticle } from "@/app/components/article/model/article";
import { saveNewArticle } from "@/app/components/article/service/article-service";
import { saveNewArticleResult } from "@/app/components/article/service/article-slice";
import { PG } from "@/app/components/common/enums/PG";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function WriteArticlePage() {
  const dispatch = useDispatch();
  const result = useSelector(saveNewArticleResult);
  const router = useRouter();
  const [newArticle, setNewArticle] = useState({} as IArticle);
  const handleFirstIconClick = () => {
    console.log("첫 번째 아이콘이 클릭되었습니다!");
  };
  const handleSecondIconClick = () => {
    console.log("두 번째 아이콘이 클릭되었습니다!");
  };
  const handleThirdIconClick = () => {
    console.log("세 번째 아이콘이 클릭되었습니다!");
  };
  const handleCancelButtonClick = () => {
    console.log("Cancel 버튼이 클릭되었습니다!");
  };
  const handlePostButtonClick = () => {
    console.log("Post 버튼이 클릭되었습니다!");
    if(newArticle.title && newArticle.content && newArticle.board){
      dispatch(saveNewArticle(newArticle));
    } else {
      alert('누락된 값이 있습니다.(보드선택, 제목, 내용)')
    }
  };

  const handleTitleChange = (e: any) => {
    setNewArticle({ ...newArticle, title: e.target.value });
  };
  const handleContentChange = (e: any) => {
    setNewArticle({ ...newArticle, content: e.target.value });
  };
  const handleSelectChange = (e: any) => {
    setNewArticle({ ...newArticle, board: e.target.value });
  };

  useEffect(() => {
    if (result === `SUCCESS`) {
      alert(result);
      router.push(`${PG.ARTICLE}/list/${newArticle.board}`);
    } else if (result === `FAILURE`) {
      console.log(result)
      console.log(`You Got Fail Message`);
    } else{
      console.log(result)
    }
  }, [result]);

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Board
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={newArticle.board}
          onChange={handleSelectChange}
        >
          <option value="">Select Board</option>
          <option value="1">Review</option>
          <option value="2">QnA</option>
        </select>
      </form>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={newArticle.title}
          onChange={handleTitleChange}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          value={newArticle.content}
          onChange={handleContentChange}
        ></textarea>

        {/* icons */}
        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleFirstIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleSecondIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleThirdIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>

        {/* buttons */}
        <div className="buttons flex">
          <div
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </div>

          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handlePostButtonClick}
          >
            Post
          </div>
        </div>
      </div>
    </>
  );
}
