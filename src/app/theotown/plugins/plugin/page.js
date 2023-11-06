"use client";
// ./theotown/plugins/plugin?name=
import { Image } from 'next/image';
import { useRouter } from 'next/navigation';

export default function PluginPage() {
	const router = useRouter();
  	console.log(router);
	
	return (
		<main>
			
		</main>
	)
}