import React, { useState } from "react";
import "./App.css";
import Layout from "components/Layout";
import Header from "components/Header";
import Form from "components/Form";
import Content from "components/content";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "오늘 할일", content: "리액트 기초 공부하기", isDone: false },
    { id: 2, title: "오늘 할일", content: "마트가서 장 보기", isDone: true },
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <Content todos={todos} setTodos={setTodos} />
    </Layout>
  );
};
export default App;
