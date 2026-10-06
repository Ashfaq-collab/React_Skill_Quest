import { useState } from "react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import XPBar from "../components/XPBar";
import QuestCard from "../components/QuestCard";

function Dashboard() {
  const [quests,setQuests] = useState([
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
  ]);

  const [xp, setXp] = useState(720);

  const completeQuest = (questId) => {
  const quest = quests.find((quest) => quest.id === questId);

  if (!quest || quest.completed) {
    return;
  }

  setQuests((currentQuests) =>
    currentQuests.map((quest) =>
      quest.id === questId
        ? { ...quest, completed: true }
        : quest
    )
  );

  setXp((currentXP) => currentXP + quest.xp);
};

  return (
    <>
      <Navbar />

      <main className="container py-5">
        {/* Welcome */}
        <section className="mb-5">
          <h1 className="fw-bold">
            Welcome back, Developer! 👋
          </h1>

          <p className="text-muted">
            Continue your journey and level up your skills.
          </p>
        </section>

        {/* Player stats */}
        <section className="mb-4">
          <div className="row g-3">
            <div className="col-md-4">
              <StatCard
                title="Total XP"
                value={xp}
                icon="⭐"
              />
            </div>

            <div className="col-md-4">
              <StatCard
                title="Current Level"
                value={xp}
                icon="🏆"
              />
            </div>

            <div className="col-md-4">
              <StatCard
                title="Day Streak"
                value={xp}
                icon="🔥"
              />
            </div>
          </div>
        </section>

        {/* XP */}
        <section className="card shadow-sm mb-5">
          <div className="card-body">
            <XPBar
              currentXP={xp}
              requiredXP={1000}
            />
          </div>
        </section>

        {/* Quests */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0">
              Active Quests
            </h2>

            <button className="btn btn-outline-primary">
              + Create Quest
            </button>
          </div>

          {quests.length > 0 ? (
            quests.map((quest) => (
              <QuestCard
                key={quest.id}
                quest={quest}
                onComplete={completeQuest}
              />
            ))
          ) : (
            <p className="text-muted">
              No quests available.
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export default Dashboard;