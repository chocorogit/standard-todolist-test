import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todolist from "../components/Todolist";
import Form from "./../components/Form";

const Home = () => {
    return (
        <div>
            <Form />
            <Todolist isDone={true} />
            <Todolist isDone={false} />
        </div>
    );
};
export default Home;
