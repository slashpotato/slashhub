/* eslint-disable @next/next/no-sync-scripts */
"use client";
import React from 'react';
import Image from 'next/image';

export default function Plugin(props) {
	var description = '404';

	return (
		<nav className='w-screen h-screen flex justify-center items-center text-center'>
			<article className='w-max h-max'>
				<h1 className='text-5xl fixed top-12 left-0 text-center w-screen'>{props.name}</h1>
				<Image src={'/plugins/' + props.name + '/preview.png'} alt='Plugin Preview' width='300' height='300' loading='eager' priority={true}></Image>
				<article>
					{ description }
				</article>
				<a className='btn btn-base btn-hover-anim fixed right-5 bottom-5 bg-green-600 inline-flex items-center justify-between' id='downloadbtn' href={'/plugins/' + props.name + '/' + props.name + '.plugin'} download><span class="material-symbols-rounded">download</span>Download</a>
			</article>
		</nav>
	)
}