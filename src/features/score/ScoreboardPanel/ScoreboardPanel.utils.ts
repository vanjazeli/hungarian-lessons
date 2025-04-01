import { ScoreboardItem, ScoreboardItems } from "./ScoreboardPanel.types";

export const lsGetScoreboardItems = (): ScoreboardItems => {
  const scoreboardItems = localStorage.getItem("scoreboard-items");

  return scoreboardItems ? JSON.parse(scoreboardItems) : [];
};

export const lsAddScoreboardItem = (scoreboardItem: ScoreboardItem) => {
  const items = lsGetScoreboardItems();
  items.push(scoreboardItem);

  localStorage.setItem("scoreboard-items", JSON.stringify(items));
};

export const lsDeleteAllScoreboardItems = () => {
  localStorage.removeItem("scoreboard-items");
};
