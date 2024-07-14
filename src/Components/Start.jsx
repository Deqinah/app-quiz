import { useRef } from "react";

function Start({ setUsername}) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    
    <div className="start">
      Gali magacaga:<input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <br/>
      Qeybta Sualaha:
      <select>
      <option ></option>
      <option>Cilmigadiniga</option>
      <option>Cilmigamadiga</option>
      </select>
      <br/>
      <button className="startButton" onClick={handleClick}> Start </button>
    </div>
  );
}
export default Start;