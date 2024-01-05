'use client'

import Image from 'next/image'
import ffaEmblem from '../../assets/ffa-emblem-886x1130.png'
import { motion } from "framer-motion"
import tomMic from '../../assets/ffa-microphone.jpg'

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-16 rounded-xl h-[80vh] py-8 px-12 bg-stone-950">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[500px] h-auto w-[50%]">
        <Image src={tomMic} alt="Tom Stine speech" />
      </motion.div>
      <div className="flex flex-col items-center justify-center w-[50%] h-[100%] relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 0.25, scale: 1.0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full flex items-center justify-center p-2 absolute z-0">
          <Image src={ffaEmblem} alt="FFA Emblem" />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-y-12 z-50">
          <h1 className="text-7xl font-bold">Tom Stine </h1>
          <div className="flex flex-col items-center justify-center w-full p-2 gap-y-6">
            <h2 className="text-5xl font-bold">FFA National</h2>
            <h2 className="text-5xl font-bold">Vice-President</h2>
            <h2 className="text-4xl font-bold">1958-1959</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}