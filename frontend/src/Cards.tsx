import "./Cards.css";
import Card from "./Card";
export default function Cards() {
  const datas = [
    {
      hanzi: "加油",
      pinyin: "jia you",
      meaning: "semangat",
    },
    {
      hanzi: "你好",
      pinyin: "ni hao",
      meaning: "halo",
    },
  ];
  return (
    <div className="container">
      <h1>FlashCard Hari Ini</h1>
      <div className="card-container">
        {datas.map((data) => (
          <Card
            key={data.hanzi}
            hanzi={data.hanzi}
            pinyin={data.pinyin}
            meaning={data.meaning}
          />
        ))}
      </div>
    </div>
  );
}
