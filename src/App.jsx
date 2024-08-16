import React from "react";
import React, { useState } from "react";
import "./App.css";

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

  return (
    <div>
      <h1>올림픽 메달 트래커</h1>
      <div>
        <label>국가</label>
        <input
          type="text"
          value={country}
          placeholder="국가 입력"
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label>금메달</label>
        <input
          type="text"
          value={gold}
          placeholder="0"
          onChange={inputMedal}
        ></input>
      </div>
      <div>
        <label>은메달</label>
        <input
          type="text"
          value={silver}
          placeholder="0"
          onChange={inputMedal}
        ></input>
      </div>
      <div>
        <label>동메달</label>
        <input
          type="text"
          value={bronze}
          placeholder="0"
          onChange={inputMedal}
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
            <tr>금메달</tr>
            <tr>은메달</tr>
            <tr>동메달</tr>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={c.id}>
              <td>{gold}</td>
              <td>{silver}</td>
              <td>{bronze}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
