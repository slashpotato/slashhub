"use client";
import React from 'react';
import SaveSetting from '@/components/SettingHandler.js';

export default function Setting(props) {
	return (
		<li><label htmlFor={props.name}>{props.label}</label><button onClick={e => SaveSetting(e.target.id)} id={props.name} className='setting-btn btn rounded-full' /></li>
	)
}