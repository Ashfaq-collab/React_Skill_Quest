import { createSlice } from "@reduxjs/toolkit";
const savedQuests = localStorage.getItem("skillquest_quests");

const defaultQuests  = [
    {
        id: 1,
        title: "Learn React Components",
        description: "Understand how reusable React components work.",
        category: "React",
        xp: 100,
        completed: true,
    },
    {
        id: 2,
        title: "Practice React Props",
        description: "Build components that communicate using props.",
        category: "React",
        xp: 75,
        completed: false,
    },
    {
        id: 3,
        title: "Build a Bootstrap Layout",
        description: "Create a responsive layout using Bootstrap.",
        category: "CSS",
        xp: 50,
        completed: false,
    },
];
const initialState = savedQuests
    ? JSON.parse(savedQuests)
    : defaultQuests;

const questSlice = createSlice({
    name: "quests",
    initialState,

    reducers: {
        addQuest: (state, action) => {
            state.push(action.payload);
        },

        completeQuest: (state, action) => {
            const quest = state.find(
                (quest) => quest.id === action.payload
            );

            if (quest) {
                quest.completed = true;
            }
        },
    },
});

export const {
    addQuest,
    completeQuest,
} = questSlice.actions;

export default questSlice.reducer;  