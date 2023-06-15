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

export default Todo;
