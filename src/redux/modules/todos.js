// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
    {
        id: shortid.generate(),
        title: "제목1",
        body: "내용1",
        isDone: false,
    },
    {
        id: shortid.generate(),
        title: "제목2",
        body: "내용2",
        isDone: false,
    },
    {
        id: shortid.generate(),
        title: "제목3",
        body: "내용3",
        isDone: true,
    },
];

export const addTodo = (payload) => {
    return {
        type: "ADD_TODO",
        payload,
    };
};
export const deleteTodo = (payload) => {
    return {
        type: "DELETE_TODO",
        payload,
    };
};
export const changeTodo = (payload) => {
    return {
        type: "SWITCH_TODO",
        payload,
    };
};
// 리듀서
const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];

        case "DELETE_TODO":
            return state.filter((item) => item.id !== action.payload);

        case "SWITCH_TODO":
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            });

        default:
            return state;
    }
};

export default todos;
