import FileUpload from '@/components/FileUpload'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('1.1  Upload your Table with product-data')
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 font-Poppins ">1. CSV</h1>
          <p className=' text-[#B1B5B9] '>Upload and prepare your Table with Product-Information</p>
          <div className='p-4' >
            <h1 className='font-Inter font-semibold text-2xl'>{text}</h1>
            <FileUpload setText={setText} />
          </div>
        </div>
      </Layout>
    </>
  )
}
