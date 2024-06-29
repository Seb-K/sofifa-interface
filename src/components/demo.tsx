import { useCallback, useState } from "react";
import { findPlayerUrls } from "../utils/find-player-urls";
import { getPlayerImageUrl } from "../utils/get-player-image-url";

export const Demo = () => {
  const [name, setName] = useState("");
  const [urls, setUrls] = useState<string[]>([]);

  const handleSearch = useCallback(() => {
    const resultUrls = findPlayerUrls(name.toLocaleLowerCase());

    setUrls(resultUrls);
  }, [name]);

  return (
    <>
      <input
        type="text"
        placeholder="Player name"
        onChange={(event) => setName(event.target.value)}
        onKeyUp={(event) => (event.key === "Enter" ? handleSearch() : null)}
      />
      <button onClick={handleSearch}>Search</button>

      <p>Result:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        {urls.map((url) => (
          <div
            key={url}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <img src={getPlayerImageUrl(url)} />
            <a href={url} target="_blank">
              {url}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
