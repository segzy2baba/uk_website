import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Products from '@/components/Products'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

function Model3D() {
  const { scene } = useGLTF('/3d/tech_floating.glb')
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model3D />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <Services />
      <About />
      <Products />
      <Team />
      <Contact />
    </div>
  )
}