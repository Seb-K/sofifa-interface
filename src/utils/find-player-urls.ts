import urls from "../player-urls/player_urls.json";

export const findPlayerUrls = (name: string) => {
  console.log("name", name);
  const playerUrls = urls.filter((url) => url.includes(name));

  return playerUrls;
};