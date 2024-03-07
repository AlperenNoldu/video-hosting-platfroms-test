/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10 flex-col items-center">
        <h1 className="text-3xl underline uppercase">VdoCipher</h1>
        <p className="mt-5">
          VdoCipher prohibits downloads and screen recording of videos to
          prevent piracy and ensure content security.
        </p>
        <div className="flex justify-center items-center mt-10 w-1/2 h-1/2">
          <iframe
            src="https://player.vdocipher.com/v2/?otp=20160313versASE323SUDMnR9ETjEoGcDNLpg0oWZucuIoqquIU61D38qZ5XIhSt&playbackInfo=eyJ2aWRlb0lkIjoiNmE3YmFhODBlYjNiZjAxYWIxOGY3OTRiZDhkY2IzZWEifQ=="
            style={{
              border: 0,
              height: "360px",
              width: "640px",
              maxWidth: "100%",
            }}
            allowFullScreen={true}
            allow="encrypted-media"></iframe>
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
