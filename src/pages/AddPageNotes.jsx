import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import { FiPlus } from 'react-icons/fi';

function AddPageWrapper() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '' });

  function handleTitleChange(event) {
    setNote({
      ...note,
      title: event.target.value
    });
  }

  function handleBodyInput(event) {
    setNote({
      ...note,
      body: event.target.value
    });
  }

  async function addNotesHandler() {
    await addNote(note);
    navigate('/');
  }

  return (
    <main className='add-new-page'>
      <NoteInput
        state={note}
        onTitleChange={handleTitleChange}
        onBodyInput={handleBodyInput}
      />
      <div className='add-new-page__action'>
        <button className="action" title='Tambah' onClick={addNotesHandler}><FiPlus /></button>
      </div>
    </main>
  );
}

export default AddPageWrapper;
