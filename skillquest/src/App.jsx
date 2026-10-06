import { Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Quests from "./pages/Quests";
import CreateQuest from "./pages/CreateQuest";
import Challenges from "./pages/Challenges";
import Progress from "./pages/Progress";

function App() {
  const [quests, setQuests] = useLocalStorage(
  "skillquest_quests",
  [
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
  ]
);

  function handleCreateQuest(newQuest) {
    setQuests((currentQuests) => [
      ...currentQuests,
      newQuest,
    ]);
  }

  function handleCompleteQuest(questId) {
    setQuests((currentQuests) =>
      currentQuests.map((quest) =>
        quest.id === questId
          ? { ...quest, completed: true }
          : quest
      )
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard quests={quests} onCompleteQuest={handleCompleteQuest} />} />

        <Route path="/quests" element={<Quests />} />

        <Route
          path="/quests/create"
          element={<CreateQuest onCreateQuest={handleCreateQuest} />}
        />

        <Route
          path="/challenges"
          element={<Challenges />}
        />

        <Route
          path="/progress"
          element={<Progress />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;