"use client";
import { React } from 'react';
import { saveSetting } from '@/components/settingHandler.js';
import { useState } from 'react';

export default function Setting(props) {
	return (
		<li><label htmlFor={props.name}>{props.label}</label><button onClick={e => saveSetting(e.target.id)} id={props.name} className='setting-btn btn rounded-full' /></li>
	)
}