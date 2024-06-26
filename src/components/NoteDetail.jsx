import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from './../utils/index';

function NoteDetail({ title, body, createdAt = '' }) {
  return (
    <>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>
        {showFormattedDate(createdAt, 'id-ID')}
      </p>
      <div className='detail-page__body' dangerouslySetInnerHTML={{ __html: body }}></div>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;