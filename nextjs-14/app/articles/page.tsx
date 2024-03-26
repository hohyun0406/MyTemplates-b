'use client'

import axios from "axios";
import { useRouter } from "next/navigation";

const SERVER = `http://localhost:8080`;

interface ICompany {
  id: number;
  title: string;
  content: string;
  writer: string;
  registerDate: string;
}

const Company = (props: ICompany) => {
  return (
    <>
      <tr key={props.id}>
        <td>{props.title}</td>
        <td>{props.content}</td>
        <td>{props.writer}</td>
        <td>{props.registerDate}</td>
      </tr>
    </>
  );
};

export default function Companies() {
    const router = useRouter();
    
  const url = `${SERVER}`;
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  axios.get(url, config).then(res=>{
    const message = res.data.message
    alert((message))
    if(message === 'SUCCESS'){
        alert("게시글이 있습니다");

    } else if (message === 'FAIL'){
        alert("게시글이 없습니다");
    } else {
        alert("지정되지 않은 값")
    }

  });

  const companies = [
    { id: 0, title: "", content: "", writer: "", registerDate: "" },
  ];

  const companyMap = companies.map((id) => (
    <Company id={0} title={""} content={""} writer={""} registerDate={""} />
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>{companyMap}</tbody>
      </table>
    </>
  );
}