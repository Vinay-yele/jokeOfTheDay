'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Loader2 } from 'lucide-react'
import {res} from "../model/model" 
interface Quote {
  content: string
}

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await res()
      setQuote({
        content: data as string,
      })
    } catch (err) {
      setError('Failed to fetch quote. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : quote ? (
          <div className="space-y-4">
            <p className="text-lg italic">"{quote.content}"</p>
            {/* <p className="text-right font-semibold">- {quote.author}</p> */}
          </div>
        ) : null}
        <Button onClick={fetchQuote} className="w-full mt-4" disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          New Joke
        </Button>
      </CardContent>
    </Card>
  )
}

