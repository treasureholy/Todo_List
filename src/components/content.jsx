import React from "react";

function Content({ todos, setTodos }) {
  //list 삭제하기
  const clickRemoveButtonHandler = (removeList) => {
    const newList = todos.filter((item) => item.id !== removeList);
    setTodos(newList);
  };

  //list 완료,취소버튼 (isDone 상태 토글)
  const clickChangeButtonHandler = (clearTodo) => {
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
    <>
      <div className="list">
        <h2>📌Working</h2>
        <div className="list-wrap">
          {workingTodos.map((item) => (
            <div key={item.id} className="list-style">
              <h2>{item.title}</h2>
              <div>{item.content}</div>
              <div className="bth-group">
                <button className="remove-btn" onClick={() => clickRemoveButtonHandler(item.id)}>
                  삭제하기
                </button>
                <button className="isDone-btn" onClick={() => clickChangeButtonHandler(item.id)}>
                  {item.isDone ? "취소" : "완료"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2>✅Done</h2>
        <div className="list-wrap">
          {doneTodos.map((item) => (
            <div key={item.id} className="list-style">
              <h2>{item.title}</h2>
              <div>{item.content}</div>
              <div className="bth-group">
                <button className="remove-btn" onClick={() => clickRemoveButtonHandler(item.id)}>
                  삭제하기
                </button>
                <button className="cancel-btn" onClick={() => clickChangeButtonHandler(item.id)}>
                  취소
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
