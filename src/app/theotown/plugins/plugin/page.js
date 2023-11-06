"use client";
// ./theotown/plugins/plugin?name=
import { useRouter } from 'next/navigation';

export default function PluginPage() {
	const router = useRouter();
  	console.log(router.name);
	
	return (
		<main>
			
		</main>
	)
}