import Head from 'next/head';
import Login from '../components/login';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

export default function Home() {

  const { isAuthenticated, isInitializing, logout} = useMoralis();

  if(isInitializing) return (
<div class=" bg-black flex items-center justify-center h-screen w-full ">
  <Image 
    src='/loadingearB.png'
    width={200}
    height={200}
    alt='loading'
    className='object-cover  rounded-full animate-spin z-50'
  />

  <div className='custom'>
  <Image 
    src='/loadingearS.png'
    width={200}
    height={200}
    alt='loading'
    className='object-cover rounded-full animate-spin'
  />
  </div>
</div>
  );

  if(!isAuthenticated) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the App</h1>
      <button onClick={logout}>Logout</button>

    </div>
  )
}
