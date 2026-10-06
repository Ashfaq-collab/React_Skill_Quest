import { useState } from "react";

function CreateQuest({ onCreateQuest }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("React");
    const [xp, setXp] = useState(100);

    function handleSubmit(event) {
        event.preventDefault();

        const newQuest = {
            id: Date.now(),
            title,
            description,
            category,
            xp,
            completed: false,
        };

        onCreateQuest(newQuest);
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h1 className="mb-4">Create New Quest</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Quest Title</label>

                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder="Learn React Hooks"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>

                            <textarea
                                className="form-control"
                                rows="4"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                placeholder="Learn useState and useEffect"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Category</label>

                            <select
                                className="form-select"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <option value="React">React</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="CSS">CSS</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="form-label">XP Reward</label>

                            <input
                                type="number"
                                className="form-control"
                                value={xp}
                                onChange={(event) => setXp(Number(event.target.value))}
                                min="10"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Create Quest
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateQuest;