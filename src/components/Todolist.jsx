import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const Todolist = ({ isDone }) => {
    const todos = useSelector((state) => state.todos);

    return (
        <Container>
            <ListTitle>{isDone ? "해야할 일" : "완료한 일"}</ListTitle>
            {todos
                .filter((item) => item.isDone === !isDone)
                .map((item) => {
                    return <Todo key={item.id} item={item} isDone={isDone} />;
                })}
        </Container>
    );
};

const ListTitle = styled.h2`
    margin-left: 10px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export default Todolist;
