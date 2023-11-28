import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    const setTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    const setBodyHandler = (e) => {
        setBody(e.target.value);
    };

    const SubmitHanlder = (e) => {
        e.preventDefault();

        const newTodo = {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
        };

        dispatch(addTodo(newTodo));

        setTitle("");
        setBody("");
    };

    return (
        <FormContainer onSubmit={SubmitHanlder}>
            <Input value={title} onChange={setTitleHandler} placeholder="제목을 입력해주세요" />
            <Input value={body} onChange={setBodyHandler} placeholder="내용을 입력해주세요" />
            <SubmitButton type="submit">입력</SubmitButton>
        </FormContainer>
    );
};

const FormContainer = styled.form`
    display: flex;
    gap: 10px;
    margin: 10px;
`;

const Input = styled.input`
    width: 180px;
    height: 32px;
    padding: 0 5px;
`;

const SubmitButton = styled.button`
    width: 100px;
    border: unset;
    border-radius: 8px;
`;

export default Form;
