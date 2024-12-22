import QuoteOfTheDay from "../components/QuoteOfTheDay"
import Imag from "../../public/image.png"
import Image from "next/image"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24  from-cyan-500 to-blue-500">
     <div className="absolute inset-0 -z-10">
        <Image 
          src={Imag} 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>      <h1 className="text-4xl font-bold text-black mb-8">Joke of the Day</h1>
      <QuoteOfTheDay />
    </main>
  )
}

