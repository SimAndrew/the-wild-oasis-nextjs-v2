import '@/styles/globals.css';
import Header from '@/components/Header';
import Head from 'next/head';

import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>The Wild Oasis</title>
				<link rel="icon" href="logo.png" />
				<meta
					name="description"
					content="Luxurious cabin Hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests."
					key="desc"
				/>
			</Head>

			<div
				className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
			>
				<Header />

				<div className="flex-1 px-8 py-12 grid">
					<main className="max-w-7xl mx-auto w-full">
						<Component {...pageProps} />
					</main>
				</div>
			</div>
		</>
	);
}
