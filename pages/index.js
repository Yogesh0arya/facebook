import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';
import { getSession } from "next-auth/client";
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { db } from '../firebase';


// completely responsive facebook 2.0. firebase storage api, uses nextjs, server side rendering, next authentication facebook login, responsiveness with tailwind css  

export default function Home({ session, posts }) {
  if(!session)return <Login/>
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        
      </Head>

    <Header/>
    <main className="flex">
      <Sidebar/>
      <Feed posts={posts} />
      <Widgets />
      
    </main>
     
    </div>
  )
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get('posts');

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props:{
      session,
      posts: docs
    },
  };
}