'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Sharable/Navbar'
import Category from '@/HomeComponents/Category'
import JobCart from '@/HomeComponents/JobCart'
import QuickLinks from '@/HomeComponents/QuickLinks'
import HomeAbout from '@/HomeComponents/HomeAbout'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Category />
      <JobCart />
      <QuickLinks />
      <HomeAbout />
    </div>
  )
}
