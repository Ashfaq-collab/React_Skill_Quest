import { createSlice } from "@reduxjs/toolkit";

const defaultQuests = [
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

const savedState = localStorage.getItem("skillquest_quests");

let initialState;

if (savedState) {
    const parsedState = JSON.parse(savedState);

    // Old version stored only an array of quests
    if (Array.isArray(parsedState)) {
        initialState = {
            quests: parsedState,
            xp: 720,
        };
    } else {
        // New version stores quests + xp
        initialState = parsedState;
    }
} else {
    initialState = {
        quests: defaultQuests,
        xp: 720,
    };
}

const questSlice = createSlice({
    name: "quests",
    initialState,

    reducers: {
        addQuest: (state, action) => {
            state.quests.push(action.payload);
        },

        completeQuest: (state, action) => {
            const quest = state.quests.find(
                (quest) => quest.id === action.payload
            );

            if (quest && !quest.completed) {
                quest.completed = true;
                state.xp += quest.xp;
            }
        },
    },
});

export const {
    addQuest,
    completeQuest,
} = questSlice.actions;

export default questSlice.reducer;