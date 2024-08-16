import React, { useState } from "react";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const handleAddCountry = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
const handleMedalChange =() =>{
if()
}
  return (
    <div>
      <h1>올림픽 메달 트래커</h1>
      <div>
        <label>국가</label>
        <input
          type="text"
          placeholder="국가 입력"
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label>금메달</label>
        <input
          type="text"
          placeholder="0"
          onChange={(e) => handleMedalChange(e, "gold")}
        ></input>
      </div>
      <div>
        <label>은메달</label>
        <input
          type="text"
          placeholder="0"
          onChange={(e) => handleMedalChange(e, "silver")}
        ></input>
      </div>
      <div>
        <label>동메달</label>
        <input
          type="text"
          placeholder="0"
          onChange={(e) => handleMedalChange(e, "bronze")}
        ></input>
      </div>
      <div>
        <button type="button" onClick={handleAddCountry}>
          국가 추가
        </button>
        <button>업데이트</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>국가</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
        {countries.map((item, idx) => (
      <tr key={idx}>
				<td>{item.name}</td>
        <td>{item.gold}</td>
        <td>{item.silver}</td>
        <td>{item.bronze}</td>
      </tr>
    ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
