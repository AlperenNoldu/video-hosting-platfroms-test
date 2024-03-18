/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  const videoUrl =
    "https://3vufgoyjhcngvku3.public.blob.vercel-storage.com/Rick_Astley_-_Never_Gonna_Give_You_Up_dQw4w9WgXcQ-QIoi8EuNnI64O5e7rDEgmA7NxRrlTz.mp4";

  return (
    <>
      <div className="flex justify-center mt-10 flex-col items-center">
        <h1 className="text-3xl underline uppercase">Vercel Blob Video Demo</h1>
        <p className="mt-5">Beispielvideo gehostet auf Vercel Blob Storage.</p>
        <div className="flex justify-center items-center mt-10 w-full">
          <video className="w-1/2 h-auto" controls src={videoUrl}>
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
        <a
          href={videoUrl}
          download
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Video herunterladen
        </a>
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
