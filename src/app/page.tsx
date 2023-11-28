'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Sharable/Navbar'
import Category from '@/HomeComponents/Category'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Category />
    </div>
  )
}
