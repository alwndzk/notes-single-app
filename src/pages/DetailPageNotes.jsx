import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote } from '../utils/local-data';
import { FiTrash2 } from 'react-icons/fi';

function DetailPageNotesWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDeleteButton() {
    deleteNote(id);
    navigate('/');
  }
  
  return (
    <DetailPage id={id} onDeleteNoteHandler={handleDeleteButton} />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
  }

  onClickDeleteButton() {
    this.props.onDeleteNoteHandler(this.props.id, this.state.note.archived);
  }

  render() {
   return (
      <section>
          <NoteDetail {...this.state.note} />
        <div className='detail-page__action'>
          <button className='action' title='Hapus' onClick={this.onClickDeleteButton}><FiTrash2 /></button>
        </div>
      </section>
    );
  }
}

export default DetailPageNotesWrapper;
