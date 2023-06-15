import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "오늘 할일", content: "리액트 기초 공부하기", isDone: false },
    { id: 2, title: "오늘 할일", content: "마트가서 장 보기", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
  //list 삭제하기
  const clickRemoveButtonHandler = (removeList) => {
    const newList = todos.filter((item) => item.id !== removeList);
    setTodos(newList);
  };
  //list 완료,취소버튼 (isDone 상태 토글)
  const clickCompleteButtonHandler = (clearTodo) => {
    const doneTodo = todos.map((item) => {
      if (item.id === clearTodo) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setTodos(doneTodo);
  };
  // 작업목록을 "Working"과 "Done"으로 분류하기
  const workingTodos = todos.filter((item) => !item.isDone);
  const doneTodos = todos.filter((item) => item.isDone);

  return (
    <div className="layout">
      <div className="app-title">
        <div>My Todo List</div> <div>React</div>
      </div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <b>제목</b> <input className="input-style" type="text" value={title} onChange={titleChangeHandler} />
          <b>내용</b> <input className="input-style" type="text" value={content} onChange={contentChangeHandler} />
        </div>
        <button className="add-button" onClick={clickAddButtonHandler}>
          추가하기
        </button>
      </form>
      <div className="list">
        <h2>📌Working</h2>
        <div className="list-wrap">
          {workingTodos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          ))}
        </div>
        <h2>✅Done</h2>
        <div className="list-wrap">
          {doneTodos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Todo = ({ item, clickRemoveButtonHandler, clickCompleteButtonHandler }) => {
  return (
    <div key={item.id} className="list-style">
      <h2>{item.title}</h2>
      <div>{item.content}</div>
      <div className="bth-group">
        <button className="remove-btn" onClick={() => clickRemoveButtonHandler(item.id)}>
          삭제하기
        </button>
        <button className="isDone-btn" onClick={() => clickCompleteButtonHandler(item.id)}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default App;
