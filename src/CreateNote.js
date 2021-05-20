import React , {useState} from 'react';

const CreateNote = ({passNote}) =>{

const [expand , setExpand] = useState(false);

const [note, setNote] = useState({
	title:'',
	content:''
});

const InputEvent = (event) =>{
	event.preventDefault();
	// const value = event.target.value;
	// const name = event.target.name;

	const {name, value} = event.target;

	setNote((oldData) =>{
		return {
			...oldData,
			[name] : value
		}
	})
}

	const addEvent = () =>{
		passNote(note);
		setNote({
				title:'',
				content:''
		})
	}

	const showTextArea = ()=>{
		setExpand(true);
	}

	const hideTextArea = ()=>{
		setExpand(false);
	}

	return(
		<>
		<div className="main_note" onDoubleClick={hideTextArea}>
			<article >

			{expand ? 
				<input 
				value={note.title} 
				name="title" 
				onChange={InputEvent} 
				type="text" 
				placeholder="Title" 
				autoComplete="off"/>
				: null}

				<textarea 
				value={note.content} 
				name="content" 
				onChange={InputEvent} 
				rows="" 
				column="" 
				placeholder="Write Your note..." 
				onClick={showTextArea}
				/>

				{expand ? 
				<button onClick={addEvent} className="plus_sign"> + </button>
				: null}

			</article>
		</div>
		</>
		)
}

export default CreateNote;