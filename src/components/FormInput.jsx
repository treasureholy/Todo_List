const FormInput = ({
  onSubmitHandler,
  title,
  content,
  titleChangeHandler,
  contentChangeHandler,
  clickAddButtonHandler,
}) => {
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

export default FormInput;
