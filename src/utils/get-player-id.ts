export const getPlayerId = (playerUrl: string): string => {
  const matches = playerUrl.match(/\d+/g);

  if (!matches) return "";

  return matches[0];
};
