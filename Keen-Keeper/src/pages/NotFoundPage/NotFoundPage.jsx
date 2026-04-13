import React, { useState } from "react";
import { Link } from "react-router";

const memes = [
  "https://i.imgur.com/qIufhof.png",
  "https://i.imgur.com/2gv0F.jpg",
  "https://i.imgur.com/Z6X9Y.jpg",
  "https://i.imgur.com/jQ9Z6.jpg",
  "https://i.imgur.com/WxNkK7J.png",
];

const NotFoundPage = () => {
  const [meme, setMeme] = useState(
    memes[Math.floor(Math.random() * memes.length)]
  );

  const changeMeme = () => {
    const random = memes[Math.floor(Math.random() * memes.length)];
    setMeme(random);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white opacity-10 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div className="text-center z-10">

        {/* Meme Image */}
        <img
          src={meme}
          alt="funny meme"
          onClick={changeMeme}
          className="w-44 mx-auto mb-6 grayscale cursor-pointer hover:scale-110 transition duration-500"
        />

        {/* 404 */}
        <h1 className="text-[100px] md:text-[150px] font-extrabold tracking-widest hover:scale-110 transition duration-500">
          404
        </h1>

        {/* Text */}
        <h2 className="text-xl md:text-2xl mt-2 font-light">
          You really shouldn’t be here 😭
        </h2>

        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          Click the meme to feel better… or just go home before things get worse 💀
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          
          <button
            onClick={changeMeme}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Another Meme 😂
          </button>

          <Link
            to="/"
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Go Home 🏠
          </Link>

        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-5 text-gray-600 text-xs">
        ERROR 404 • Meme therapy activated 🧠
      </p>

    </div>
  );
};

export default NotFoundPage;