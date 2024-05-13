"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  question: string;
  exampleRequired?: string;
};

export default function Home() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("입력된 값 : ", watch("question"));
    fetch("http://localhost:8000/api/chat/titanic" , {
      //선택지 3개로 나누기
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      // .then((data) => setMessage(data.answer))
      .then((data) => console.log(data.answer))
      .catch((error) => console.log("error:", error));
  };

  return (
    <div>
      {/*<!-- Article 섹션 -->*/}
      <div className="Article w-screen h-screen relative bg-white">
        {/*<!-- Article 내용 -->*/}
      </div>
      {/*<!-- Cards 섹션 -->*/}
      <div className="Cards left-[90px] top-[654px] absolute justify-start items-start gap-8 inline-flex">
        {/*<!-- Card 1 -->*/}
        <div className="Card w-[404px] h-[434px] flex-col justify-start items-start gap-6 inline-flex">
          <img
            className="Image w-[404px] h-[346px] relative rounded-lg"
            src="https://cdn.theatlantic.com/thumbor/1zSmvW3Hckje87TNIYFSNdMKloI=/1x81:4095x2384/960x540/media/img/mt/2023/02/MCDTITA_FE014/original.jpg"
          />
          <div className="Copy self-stretch h-16 flex-col justify-center items-start gap-1 flex">
            <div className="Title self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
              Title
            </div>
            <div className="Author self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
              Author
            </div>
          </div>
        </div>
        {/*<!-- Card 2 -->*/}
        <div className="Card w-[404px] h-[434px] flex-col justify-start items-start gap-6 inline-flex">
          <img
            className="Image w-[404px] h-[346px] relative rounded-lg"
            src="https://media-be.chewy.com/wp-content/uploads/2021/05/12104138/shiba-inu-476982523-882x615.jpg"
          />
          <div className="Copy self-stretch h-16 flex-col justify-center items-start gap-1 flex">
            <div className="Title self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
              Title
            </div>
            <div className="Author self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
              Author
            </div>
          </div>
        </div>
        {/*<!-- Card 3 -->*/}
        <div className="Card w-[404px] h-[434px] flex-col justify-start items-start gap-6 inline-flex">
          <img
            className="Image w-[404px] h-[346px] relative rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Scottish_fold_cat.jpg"
          />
          <div className="Copy self-stretch h-16 flex-col justify-center items-start gap-1 flex">
            <div className="Title self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
              Title
            </div>
            <div className="Author self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
              Author
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ArticleTitle 섹션 -->*/}
      <div className="ArticleTitle w-[1181px] h-[139px] left-[80px] top-[244px] absolute flex-col justify-center items-start gap-6 inline-flex">
        <div className="Titanic self-stretch text-black text-[64px] font-bold font-['Inter']">
          호현LLM에게 물어보세요!
        </div>
      </div>
      {/*<!-- Navigation 섹션 -->*/}
      <div className="Navigation h-[164px] px-20 py-14 left-0 top-0 absolute bg-white justify-center items-center gap-[795px] inline-flex">
        <div className="SiteName text-black text-xl font-medium font-['Inter'] leading-[30px]">
          Site name
        </div>
        <div className="Items self-stretch justify-end items-center gap-12 inline-flex">
          <div className="Page text-black text-xl font-medium font-['Inter'] leading-[30px]">
            Page
          </div>
          <div className="Page text-black text-xl font-medium font-['Inter'] leading-[30px]">
            Page
          </div>
          <div className="Page text-black text-xl font-medium font-['Inter'] leading-[30px]">
            Page
          </div>
          <div className="Button px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 flex">
            <div className="Button text-white text-base font-medium font-['Inter'] leading-normal">
              Button
            </div>
          </div>
        </div>
      </div>
      {/*<!-- InputField 섹션 -->*/}
      <div>{message && <h4>{message}</h4>}</div>
      <div className="InputField w-[1312px] h-[101px] px-4 py-3 left-[80px] top-[383px] absolute bg-white rounded-lg shadow border-4 border-blue-500 justify-start items-start gap-2 inline-flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex items-center"
        >
          <input
            type="text"
            placeholder="내용을 입력하세요"
            {...register("question", { required: true })}
            className="w-full h-full outline-none bg-transparent"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow"
          >
            버튼
          </button>
        </form>
      </div>
      {/*<!-- ComicboldButtonLargeIdleTrue 섹션 -->*/}
      <div className="ComicboldButtonLargeIdleTrue left-[292px] top-[591px] absolute flex-col justify-start items-start inline-flex" />
      <div className="ComicboldButtonLargeIdleTrue left-[1173px] top-[605px] absolute flex-col justify-start items-start inline-flex" />
      <div className="ComicboldButtonLargeIdleTrue left-[747px] top-[605px] absolute flex-col justify-start items-start inline-flex" />
    </div>
  );
}
