import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid  justify-center mt-10 ">
        <h1 className="text-3xl underline uppercase">
          Video Hosting Platfrom Test
        </h1>
        <ul className="text-left  list-inside ml-5 mt-5 *:my-5">
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
          <li>
            <Link href="/Gumlet" className="hover:text-blue-500">
              Gumlet
            </Link>
          </li>
          <li>
            <Link href="/Muvi" className="hover:text-blue-500">
              Muvi
            </Link>
          </li>
          <li>
            <Link href="/Cincopa" className="hover:text-blue-500">
              Cincopa
            </Link>
          </li>
          <li>
            <Link href="/Vimeo" className="hover:text-blue-500">
              Vimeo
            </Link>
          </li>
          <li>
            <Link href="/Dailymotion" className="hover:text-blue-500">
              Dailymotion
            </Link>
          </li>
          <li>
            <Link href="/HippoVideo" className="hover:text-blue-500">
              HippoVideo
            </Link>
          </li>
          <li>
            <Link href="/QuickaPageInc" className="hover:text-blue-500">
              QuickaPage Inc.
            </Link>
          </li>
          <li>
            <Link href="/LoomInc" className="hover:text-blue-500">
              Loom, Inc.
            </Link>
          </li>
          <li>
            <Link href="/Brightcove" className="hover:text-blue-500">
              Brightcove
            </Link>
          </li>
          <li>
            <Link href="/Uscreen" className="hover:text-blue-500">
              Uscreen
            </Link>
          </li>
          <li>
            <Link href="/Dacast" className="hover:text-blue-500">
              Dacast
            </Link>
          </li>
          <li>
            <Link href="/Kaltura" className="hover:text-blue-500">
              Kaltura
            </Link>
          </li>
          <li>
            <Link href="/SproutVideo" className="hover:text-blue-500">
              SproutVideo
            </Link>
          </li>
          <li>
            <Link href="/AmazonS3Favorit" className="hover:text-blue-500">
              Amazon S3 → Favorit
            </Link>
          </li>
          <li>
            <Link href="/Brightcove" className="hover:text-blue-500">
              Brightcove
            </Link>
          </li>
          <li>
            <Link href="/Moodle" className="hover:text-blue-500">
              Moodle
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
