"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
export default function TestPage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/test")
      const result = await response.json()
      console.log(result)
    }
    fetchData()
  }, [])
  return (
    <div className="flex h-screen flex-col flex-wrap items-center justify-center px-3 sm:flex-nowrap sm:px-5">
      <motion.div
        initial={{ x: "200vh", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="w-full grow bg-red-500"
      >
        Box 1
      </motion.div>
      <motion.div
        initial={{ x: "-200vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full grow bg-blue-500"
      >
        Box 2
      </motion.div>
      <motion.div
        initial={{ x: "200vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full grow bg-purple-500"
      >
        Box 3
      </motion.div>

      <motion.div
        initial={{ x: "-200vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full grow bg-green-500"
      >
        Box 4
      </motion.div>
    </div>
  )
}
