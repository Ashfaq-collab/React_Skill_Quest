import { Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Quests from "./pages/Quests";
import CreateQuest from "./pages/CreateQuest";
import Challenges from "./pages/Challenges";
import Progress from "./pages/Progress";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard/>} />

        <Route path="/quests" element={<Quests />} />

        <Route
          path="/quests/create"
          element={<CreateQuest />}
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