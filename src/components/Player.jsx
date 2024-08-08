import { useState } from "react";

export default function Player(props) {
  const { initialName, symbol, isActive } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function toggleIsEditing() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      props.onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  //let btnCaption = "Edit";

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
