import React from 'react';
import Comment from './Comment';

const commentsList = [
  { name: 'Rushikesh', comment: 'Great work and Enjoy the lesson' },
  { name: 'Pratik', comment: 'Great work on the project!' },
  { name: 'Vedant', comment: 'I love the design and layout.' },
  { name: 'Tushar', comment: 'Nice use of colors.' },
];

export default function DisplayComments() {
  return (
    <div>
      <h2>Comments</h2>
      {commentsList.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};