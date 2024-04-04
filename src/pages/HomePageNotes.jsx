import React from 'react';
import NoteList from '../components/NoteList';
import SearchList from '../components/SearchList';
import { getActiveNotes } from '../utils/network-data';
import { FiPlus } from 'react-icons/fi';
import { useNavigate, useSearchParams } from 'react-router-dom';

function HomePagesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  const navigated = useNavigate();
  function addButtonHandler() {
    navigated('/notes/note');
  }

  return (
    <HomePageNotes
      defaultSearchKeyword={searchKeyword}
      onSearchKeywordChange={changeSearchParams}
      onAddButtonHandler={addButtonHandler}
    />
  );
}

function HomePageNotes({ defaultSearchKeyword, onSearchKeywordChange, onAddButtonHandler }) {
  const [notes, setNotes] = React.useState([]);
  const [searchKeyword, setSearchKeyword] = React.useState(defaultSearchKeyword || '');
  const [filteredNotes, setFilteredNotes] = React.useState([]);

  React.useEffect(() => {
    setNotes(getActiveNotes());
    setFilteredNotes(notes);
  }, []);

  React.useEffect(() => {
    setSearchKeyword(defaultSearchKeyword || '');
  }, [defaultSearchKeyword]);

  return (
    <section className='homepage'>
      <h2>Daftar Catatan Aktif</h2>
      <SearchList searchKeyword={searchKeyword} onSearchKeywordChange={onSearchKeywordChange} />
      <NoteList notes={filteredNotes} />
      <div className='homepage__action'>
        <button className='action' title='Tambah' onClick={onAddButtonHandler}><FiPlus /></button>
      </div>
    </section>
  );
}

export default HomePagesWrapper;
