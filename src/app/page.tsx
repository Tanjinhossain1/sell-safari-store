'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Sharable/Navbar'
import Category from '@/HomeComponents/Category'
import JobCart from '@/HomeComponents/JobCart'
import QuickLinks from '@/HomeComponents/QuickLinks'
import HomeAbout from '@/HomeComponents/HomeAbout'
import Footer from '@/components/Sharable/Footer'
import Banner from '@/HomeComponents/Banner'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <JobCart />
      <QuickLinks />
      <HomeAbout />
      <Footer />
    </div>
  )
}
