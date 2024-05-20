import Image from "next/image";
import { Slider, Featured, Offer } from '../components/'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Slider/>
      <Featured/>
      <Offer/>
    </main>

  );
}
