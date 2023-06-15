import { useState } from "react";
import React from "react";
import "./form.css";

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Input 값 입력 시 이벤트 처리
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  //새로고침 방지
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  //추가하기 버튼
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    //다시 빈 값으로 바뀌도록 구성
    setTitle("");
    setContent("");
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <b>제목</b> <input className="input-style" type="text" value={title} onChange={titleChangeHandler} />
        <b>내용</b> <input className="input-style" type="text" value={content} onChange={contentChangeHandler} />
      </div>
      <button className="add-button" onClick={clickAddButtonHandler}>
        추가하기
      </button>
    </form>
  );
};

export default Form;
