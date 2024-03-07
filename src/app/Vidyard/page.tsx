/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10 flex-col items-center">
        <h1 className="text-3xl underline uppercase">Vidyard</h1>
        <p className="mt-5">
          Dowload: Nicht möglich im Free-Plan
        </p>
        <a
          href="https://share.vidyard.com/watch/aEme9RTbYyN261yNaEZ65E?"
          className="mt-5">
          Direkt zu Vidyard
        </a>
        <div className="flex justify-center items-center mt-10 w-1/2 h-1/2">
          <script
            type="text/javascript"
            async
            src="https://play.vidyard.com/embed/v4.js"></script>

          <img
            className="vidyard-player-embed w-1/2 h-1/2 object-cover mx-auto"
            src="https://play.vidyard.com/aEme9RTbYyN261yNaEZ65E.jpg"
            data-uuid="aEme9RTbYyN261yNaEZ65E"
            data-v="4"
            data-type="inline"
          />
        </div>
        <Link href={"/"}>
          <button className="button-30 mt-10 animate-pulse" role="button">
            Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
