import React , {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () =>{

  const [addItem , setAddItem] = useState([]);

  const addNote = (note) =>{
   console.log(note.title);
   console.log(note.content);

       if(note.title === '' || note.content === ''){
          alert("Please Fill The Note Fields")
       }else{

           setAddItem((oldData) =>{
            return [...oldData, note];
           })
      }

  }

  const deleteNote = (id) =>{
      setAddItem((oldData)=>{
        return oldData.filter((curr,index)=>{
                return index !== id; 
              })
      })
}

return (
    <div>
      <Header />

      <CreateNote
      passNote={addNote}
       />
      

      {
        addItem.map((curr , index) =>{
          return <Note 
            key={index}
            id={index}
            title={curr.title}
            content={curr.content}
            removeNote={deleteNote}
          />

        })
      }

      <Footer />
      
    </div>
  );
}

export default App;
