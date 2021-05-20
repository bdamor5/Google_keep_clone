import React from 'react';

const Note = ({id, title , content,removeNote}) =>{

	const Noteremove = ()=>{
		removeNote(id);
	}

	return(
		<div className="note">
			<h1> {title} </h1>
			<br/>
			<p> {content} </p>
			<button onClick={Noteremove} className="minus_sign"> - </button>
		</div>
		)
}

export default Note;