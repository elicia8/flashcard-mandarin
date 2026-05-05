import { useState } from "react";

interface Word {
  hanzi: string;
  pinyin: string;
  meaning: string;
}
export default function Card({ hanzi, pinyin, meaning }: Word) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <h3>{hanzi}</h3>
      {flipped ? (
        <div className="description">
          <h4>{pinyin}</h4>
          <h5>{meaning}</h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
