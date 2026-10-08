import { createSlice } from "@reduxjs/toolkit";
import {
    addProgressHistory,
} from "../utils/helpers";

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
            streak: 0,
            lastCompletedDate: null,
            progressHistory: []
        };
    } else {
        initialState = {
            quests: parsedState.quests,
            xp: parsedState.xp,
            streak: parsedState.streak ?? 0,
            lastCompletedDate: parsedState.lastCompletedDate ?? null,
            dailyChallengeCompletedDate:
                parsedState.dailyChallengeCompletedDate ?? null,
            progressHistory:
                parsedState.progressHistory ?? []
        };
    }
} else {
    initialState = {
        quests: defaultQuests,
        xp: 720,
        streak: 0,
        lastCompletedDate: null,
        dailyChallengeCompletedDate: null,
        progressHistory: []
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
            const { questId, completedDate } = action.payload;

            const quest = state.quests.find(
                (quest) => quest.id === questId
            );

            if (quest && !quest.completed) {
                quest.completed = true;
                state.xp += quest.xp;

                addProgressHistory(
                    state.progressHistory,
                    completedDate,
                    quest.xp
                );

                if (state.lastCompletedDate === completedDate) {
                    return;
                }

                if (!state.lastCompletedDate) {
                    state.streak = 1;
                } else {
                    const previousDate = new Date(
                        state.lastCompletedDate
                    );

                    const currentDate = new Date(
                        completedDate
                    );

                    const difference =
                        (currentDate - previousDate) /
                        (1000 * 60 * 60 * 24);

                    if (difference === 1) {
                        state.streak += 1;
                    } else {
                        state.streak = 1;
                    }
                }

                state.lastCompletedDate = completedDate;
            }
        },
        completeDailyChallenge: (state, action) => {
            const { completedDate, xp } = action.payload;

            if (
                state.dailyChallengeCompletedDate ===
                completedDate
            ) {
                return;
            }

            state.xp += xp;

            addProgressHistory(
                state.progressHistory,
                completedDate,
                xp
            );

            state.dailyChallengeCompletedDate =
                completedDate;
        }
    },
});

export const {
    addQuest,
    completeQuest,
    completeDailyChallenge
} = questSlice.actions;

export default questSlice.reducer;