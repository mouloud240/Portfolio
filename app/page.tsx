'use client'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal } from "@/components/Terminal"
import { TypeWriter } from "@/components/TypeWriter"
import { MatrixBackground } from "@/components/MatrixBackground"
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { projects } from './contansts/projects'
export default function Home() {
  const [showAbout, setShowAbout] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [, setShowSkills] = useState(false)
  const [showWindow,setShowWindow]=useState(true);
  
 

  function handleOpenClick(){
    setShowWindow(!showWindow)
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowAbout(true), 1000)
    return () => clearTimeout(timer)
  }, [])
 const center=!showWindow?'h-screen':'h-full'; 

  return (
    <main className="min-h-screen bg-black bg-opacity-80 text-green-400 p-4 font-mono relative">
            <MatrixBackground />

      <div className={`flex w-full ${center} justify-center items-center `}><div className='z-10 '>        
        {
          !showWindow &&(  <button onClick={handleOpenClick}>
            <Image src={"/app.svg"} alt='Logo' width={62} height={25}/>
          </button>
          )        
        }

      </div>

      </div>      {
        showWindow&&(
          
    
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
<motion.div  className="mx-auto border border-green-400 rounded-lg overflow-hidden relative z-10 max-w-4xl w-full bg-black bg-opacity-90">
        <div className="bg-green-400 text-black px-4 py-2 flex justify-between items-center">
          <span>portfolio.exe</span>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={handleOpenClick}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-8">
            <p className="mb-2">$ whoami</p>
            <div className="pl-4">
              <Image
                src="https://github.com/mouloud240.png"
                alt="Mouloud Hasrane"
                width={80}
                height={80}
                className="rounded-full mb-2"
              />
              <h1 className="text-2xl font-bold mb-1">
                <TypeWriter text="Mouloud Hasrane" delay={100} />
              </h1>
              <p className="text-green-200 mb-2">
                <TypeWriter text="Full-Stack Developer" delay={50} />
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black">
                  <a href="https://github.com/mouloud240" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black">
                  <a href="https://www.linkedin.com/in/mouloud-hasrane-85bb47291/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black">
                  <a href="mailto:mouloudhasrane24@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {showAbout && (
            <div className="mb-8">
              <p className="mb-2">$ cat about.txt</p>
              <p className="pl-4 text-green-200">
                <TypeWriter 
                  text="I'm a passionate full-stack developer with experience in building web and mobile applications. I love working with modern technologies and am always eager to learn new skills."
                  delay={20}
                  onComplete={() => setShowProjects(true)}
                />
              </p>
            </div>
          )}

          {showProjects && (
            <div className="mb-8">
              <p className="mb-2">$ ls projects/</p>
              <div className="pl-4 space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-1">
                      <TypeWriter text={project.title} delay={50} />
                    </h3>
                    <p className="text-green-200 mb-2">
                      <TypeWriter text={project.description} delay={20} />
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-green-400 border-green-400">
                          <TypeWriter text={tag} delay={30} />
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showProjects && (
            <div>
              <p className="mb-2">$ echo $SKILLS</p>
              <div className="pl-4 flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'NeoVim','Node.js', 'Next.js', 'Python', 'SQL', 'Git','NestJs'].map((skill, index) => (
                  <Badge key={skill} variant="outline" className="text-green-400 border-green-400">
                    <TypeWriter text={skill} delay={50} onComplete={() => {
                      if (index === 7) setShowSkills(true)
                    }} />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
        )
      }
      <Terminal />
      <div className="fixed bottom-4 left-4 w-2 h-5 bg-green-400 animate-pulse"></div>
    </main>
  )
}

