import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid  justify-center items-center mt-10 ">
        <h1 className="text-3xl underline uppercase">
          Video Hosting Platfrom Test
        </h1>

        <h2 className="text-2xl mt-5 text-center underline">(SaaS)</h2>
        <ul className="text-left  list-inside ml-5  *:my-5">
          <li>
            <Link href="/Wistia" className="hover:text-blue-500">
              Wistia
            </Link>
          </li>
          <li>
            <Link href="/Vidyard" className="hover:text-blue-500">
              Vidyard
            </Link>
          </li>
          <li>
            <Link href="/VdoCipher" className="hover:text-blue-500">
              VdoCipher
            </Link>
          </li>
        </ul>

      {/*   <div>
          <h2 className="text-2xl pt-10 text-center underline">(Self-Host)</h2>
          <ul className="text-left  list-inside ml-5  *:my-5">
            <li>
              <a href="/Kaltura" className="hover:text-blue-500">
                Kaltura
              </a>
            </li>
            <li>
              <a href="/MediaDrop" className="hover:text-blue-500">
                MediaDrop
              </a>
            </li>
            <li>
              <a href="/PeerTube" className="hover:text-blue-500">
                PeerTube
              </a>
            </li>
            <li>
              <a href="/YouPHPTube" className="hover:text-blue-500">
                YouPHPTube (auch bekannt als AVideo)
              </a>
            </li>
            <li>
              <a href="/ClipBucket" className="hover:text-blue-500">
                ClipBucket
              </a>
            </li>
            <li>
              <a href="/Plumi" className="hover:text-blue-500">
                Plumi
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
