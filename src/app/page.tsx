import QuoteOfTheDay from "../components/QuoteOfTheDay"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-8">Joke of the Day</h1>
      <QuoteOfTheDay />
    </main>
  )
}

