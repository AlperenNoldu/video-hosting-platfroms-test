import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10 flex-col items-center">
        <h1 className="text-3xl underline uppercase">Wistia</h1>
        <p className="mt-5">
          Dowload: Hover über das Video. Rechts unten 3 Punkte klicken dann 2.
          Icon von rechts klicken.
        </p>
        <a href="https://titanom.wistia.com/medias/bs03dq58st" className="mt-5">
          Direkt zu Wistia
        </a>
        <div className="flex justify-center mt-10 w-full">
          <iframe
            src="https://fast.wistia.net/embed/iframe/bs03dq58st?seo=true&videoFoam=false"
            title="A very serious video"
            allow="autoplay; fullscreen"
            allowTransparency={true}
            className="wistia_embed"
            name="wistia_embed"
            allowFullScreen
            width="640"
            height="480"></iframe>
        </div>
        <script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async></script>
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
