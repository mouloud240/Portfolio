'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"

type Command = {
  command: string
  output: string
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Command[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return

    let output = ''
    switch (input.toLowerCase()) {
      case 'help':
        output = 'Available commands: help, about, skills, projects, clear,exit'
        break
      case 'about':
        output = "I'm a passionate full-stack developer with experience in building web and mobile applications."
        break
      case 'skills':
        output = 'JavaScript, TypeScript, React, Node.js, Next.js, Python, SQL, Git'
        break
      case 'projects':
        output = 'Expense Tracker, Portfolio Website, Weather App'
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      case 'exit':
        setInput('');
        setIsOpen(false)
        return
      default:
        output = `Command not found: ${input}. Type 'help' for available commands.`
    }

    setHistory([...history, { command: input, output }])
    setInput('')
  }

  return (
    <>
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-4 z-10 hover:scale-105 right-4 bg-green-400 text-black hover:bg-green-500"
      >
        {isOpen ? 'Close Terminal' : 'Open Terminal'}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-black border border-green-400 rounded-lg w-full max-w-2xl h-96 flex flex-col">
            <div className="bg-green-400 text-black px-4 py-2 flex justify-between items-center rounded-t-lg">
              <span>terminal</span>
              <button onClick={() => setIsOpen(false)} className="text-black">&times;</button>
            </div>
            <div className="flex-1 p-4 overflow-auto font-mono text-green-400">
              {history.map((item, index) => (
                <div key={index}>
                  <div>$ {item.command}</div>
                  <div className="pl-2 mb-2">{item.output}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-green-400">
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 focus:outline-none"
                  placeholder="Type a command..."
                />
                <span className="animate-blink">|</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

