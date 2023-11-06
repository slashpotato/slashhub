// ./settings
import Setting from '@/components/react/Setting.jsx';

export default function Settings() {
	return (
		<main className='h-screen max-w-5xl mx-auto pt-12 flex items-center justify-center'>
			<div className='h-max min-w-[32rem] text-left border-[1px] border-zinc-800 p-3 rounded-xl overflow-x-hidden overflow-y-scroll' id='settings-div'>
				<ul>
					<Setting name='test' label='test setting' />
					<Setting name='hello' label='potatos' />
				</ul>
			</div>
		</main>
	)
}