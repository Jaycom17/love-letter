import HeartShape from "./HeartShape";
import { useState } from "react";
import Card from "./Card";
import { messages } from "./messages";

const App = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "Eres la mujer mas maravillosa del universo",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });

  const handleClick = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setOpen(!open);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className={`${open ? "hidden" : "block"}`}>
        <HeartShape message="Tocame" handleClick={handleClick} />
      </div>
      <div className={`${open ? "block" : "hidden"}`}>
        <Card message={message.message} link={message.link} close={handleClick}/>
      </div>
    </div>
  );
};

export default App;
