import React from "react";
import styled from "styled-components";
import { changeTodo, deleteTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

function Todo({ item, isDone }) {
    const dispatch = useDispatch();

    const changeStateHandler = () => {
        dispatch(changeTodo(item.id));
    };
    const deleteHandler = () => {
        dispatch(deleteTodo(item.id));
    };

    return (
        <TodoContainer>
            <Id>{item.id}</Id>
            <Title>{item.title}</Title>
            <Body>{item.body}</Body>
            <IsDone>{item.isDone}</IsDone>
            <ButtonBox>
                <IsDoneButton isDone={isDone} onClick={changeStateHandler}>
                    {isDone ? "완료" : "취소"}
                </IsDoneButton>
                <DeleteButton onClick={deleteHandler}>삭제</DeleteButton>
            </ButtonBox>
        </TodoContainer>
    );
}

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    height: auto;
    margin: 0 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
`;
const Id = styled.div`
    color: #777;
`;
const Title = styled.h3``;
const Body = styled.div``;
const IsDone = styled.div``;
const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const IsDoneButton = styled.button`
    width: calc(50% - 5px);
    height: 32px;
    border: unset;
    background: ${(props) => (props.isDone ? "#aeffa3" : "#ffeaa3")};
    border-radius: 8px;
    cursor: pointer;
`;
const DeleteButton = styled.button`
    width: calc(50% - 5px);
    height: 32px;
    border: unset;
    background: #ffa3a3;
    border-radius: 8px;
    cursor: pointer;
`;
export default Todo;
