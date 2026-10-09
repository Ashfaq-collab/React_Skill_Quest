const XP_PER_LEVEL = Number(
    import.meta.env.VITE_XP_PER_LEVEL || 1000
);

export function calculateLevel(xp) {
    return Math.floor(xp /XP_PER_LEVEL) + 1;
}
export function getTodayDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
export function getDailyChallenge(challenges) {
    const today = getTodayDate();

    const dateNumber = Number(
        today.replaceAll("-", "")
    );

    const index = dateNumber % challenges.length;

    return challenges[index];
}

export function addProgressHistory(
    history,
    date,
    xp
) {
    const existingEntry = history.find(
        (entry) => entry.date === date
    );

    if (existingEntry) {
        existingEntry.xp += xp;
    } else {
        history.push({
            date,
            xp,
        });
    }
}