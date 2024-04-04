import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, getNote } from '../utils/local-data';
import { FiTrash2 } from 'react-icons/fi';
import NoteDetail from '../components/NoteDetail';

function DetailPageNotesWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDeleteButtonClick() {
    deleteNote(id);
    navigate('/');
  }
  
  return (
    <DetailPage id={id} onDeleteNoteHandler={handleDeleteButtonClick} />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  handleDeleteButtonClick() {
    this.props.onDeleteNoteHandler(this.props.id);
  }
  async componentDidMount() {
    const { data } = await getNote(id);
    
    this.setState(() => {
      return {
        notes: data
      }
    })
  }
  
  render() {
   return (
      <section>
          <NoteDetail {...this.state.note} />
        <div className='detail-page__action'>
          <button className='action' title='Hapus' onClick={this.handleDeleteButtonClick}><FiTrash2 /></button>
        </div>
      </section>
    );
  }
}

export default DetailPageNotesWrapper;
