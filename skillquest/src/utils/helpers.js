export function calculateLevel(xp) {
    return Math.floor(xp / 1000) + 1;
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