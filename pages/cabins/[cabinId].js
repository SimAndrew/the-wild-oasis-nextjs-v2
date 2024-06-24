import { useRouter } from 'next/router';
import Head from 'next/head';

function Cabin() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Cabin {router.query.cabinId} / The Wild Oasis</title>
			</Head>

			<div>Cabin #{router.query.cabinId}</div>
		</>
	);
}

export default Cabin;
