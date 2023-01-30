'use client'

import { useState } from 'react'

const Home = () => {
  const [number, setNumber] = useState<number>(0)

  const click = () => {
    let min = 1
    let max = 1000000

    min = Math.ceil(min)
    max = Math.floor(max)

    setNumber(Math.floor(Math.random() * (1000000 - 1) + 1))
  }

  return (
    <>
      <div className="w-screen h-screen">
        <div className="h-full max-w-screen-xs mx-auto w-11/12">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <button className="bg-white hover:bg-black font-medium hover:text-white transition border-2 border-white duration-300 text-black px-12 py-4 rounded-xl" onClick={click}>Generate</button>
            {number !== 0 && (
              <p className="mt-8 text-3xl font-black">
                {number}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
