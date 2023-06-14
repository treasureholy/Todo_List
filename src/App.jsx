import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "오늘 할일", content: "공부하기" },
    { id: 2, title: "오늘 할일", content: "장 보기" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  //추가하기 버튼
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
    };
    setTodo([...todo, newTodo]);
  };

  //list 삭제하기
  const clickRemoveButtonHandler = (removeList) => {
    const newList = todo.filter((item) => item.id !== removeList);
    setTodo(newList);
  };

  //list 완료하기
  // const clickCompleteButtonHandler = () => {

  // }

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
          {todo.map((item) => {
            return (
              <div key={item.id} className="list-style">
                <h2>{item.title}</h2>
                <div>{item.content}</div>
                <button
                  className="remove-btn"
                  onClick={() => {
                    clickRemoveButtonHandler(item.id);
                  }}
                >
                  삭제하기
                </button>
              </div>
            );
          })}
        </div>
        <h2>✅Done</h2>
      </div>
    </div>
  );
};
export default App;
