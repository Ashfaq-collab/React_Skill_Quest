import { useState } from "react";
import StatCard from "../components/StatCard";
import XPBar from "../components/XPBar";
import QuestCard from "../components/QuestCard";
import { completeQuest } from "../redux/questSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateLevel } from "../utils/helpers";

function Dashboard() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const { quests, xp } = useSelector(
        (state) => state.quests
    );
    
    const level = calculateLevel(xp);

    const dispatch = useDispatch();

    const completeQuestHandler = (questId) => {
        dispatch(completeQuest(questId));
    };

    const filteredQuests =
        selectedCategory === "All"
            ? quests
            : quests.filter(
                (quest) => quest.category === selectedCategory
            );

    return (
        <>
            <div className="container py-5">
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
                                value={level}
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
                    <div className="d-flex gap-2 mb-3 flex-wrap">
                        {["All", "React", "JavaScript", "CSS"].map(
                            (category) => (
                                <button
                                    key={category}
                                    className={`btn ${selectedCategory === category
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            )
                        )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="fw-bold mb-0">
                            Active Quests
                        </h2>

                        <button className="btn btn-outline-primary">
                            + Create Quest
                        </button>
                    </div>

                    {filteredQuests.length > 0 ? (
                        filteredQuests.map((quest) => (
                            <QuestCard
                                key={quest.id}
                                quest={quest}
                                onComplete={completeQuestHandler}
                            />
                        ))
                    ) : (
                        <p className="text-muted">
                            No quests found in this category.
                        </p>
                    )}
                </section>
            </div>
        </>
    );
}

export default Dashboard;