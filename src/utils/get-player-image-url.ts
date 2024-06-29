import { getPlayerId } from "./get-player-id";

const fillImageUrl = (idParts: string[]) => {
  return `https://cdn.sofifa.net/players/${idParts[0]}/${idParts[1]}/24_120.png`;
};

export const getPlayerImageUrl = (playerUrl: string): string => {
  const playerId = getPlayerId(playerUrl);

  const splitId = playerId.match(/.{3}/g);

  if (!splitId) return "";

  return fillImageUrl(splitId);
};
