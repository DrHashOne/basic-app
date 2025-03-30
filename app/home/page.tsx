import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>IoT Solutions</title>
        <meta name="description" content="Innovative IoT solutions for a connected world with heart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="text-center p-6 bg-white shadow-lg rounded-2xl max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Smart IoT Solutions</h1>
        <p className="text-gray-700 mb-4">Empowering the future with cutting-edge IoT technology.</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Get Started</button>
      </main>
    </div>
  );
}
