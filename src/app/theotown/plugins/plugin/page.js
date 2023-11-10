"use client";
// ./theotown/plugins/plugin?name=
import Plugin from '@/components/react/Plugin.jsx';
import * as fs from 'node:fs';

export default function PluginPage() {
	function definePluginName() {
		let pluginName = prompt('Plgin name');
		if (pluginName != null) {
			window.location.replace('/theotown/plugins/plugin&name=' + pluginName);
		}
	}
	function backToList() {
		window.location.replace('/theotown/plugins')
	}
	const emptyNameError = <search className='w-screen h-screen flex justify-center items-center'>
		<span className='text-center'>
			Please define <span className='code code-hilit'>?name=<span className='text-zinc-500'>[any]</span></span> after url to get specified plugin.<br />
			<button className='super-btn btn-hover-anim' onClick={definePluginName}>Do it</button> or <button className='super-btn btn-hover-anim' onClick={backToList}>Go back to plugins list</button>
		</span>
	</search>

	if (typeof window !== "undefined") {
		const url = window.location.href;
		let urlArgs

		if (url.split('?')[1] != undefined) {
			urlArgs = url.split('?')[1].split('=');
			if (urlArgs[1] != "" && urlArgs[0] == 'name' && fs.existsSync('/plugins/' + urlArgs[1] + '/data.json')) {
				return (
					<Plugin name={urlArgs[1]} />
				)
			} else {
				return emptyNameError
			}
		} else {
			return emptyNameError
		}
	} else {
		'window or localStorage is not supported by your browser'
	}

	return (
		<main className='flex justify-center items-center w-screen h-screen'>
			Loading...
		</main>
	)
}