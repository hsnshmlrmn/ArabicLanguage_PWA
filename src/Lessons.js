import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: 'alphabet', title: 'Arabic Alphabet' },
  { id: 'greetings', title: 'Greetings & Basic Words' },
  { id: 'numbers', title: 'Numbers in Arabic' },
];

export default function Lessons() {
  return (
    <div style={{padding: '2em'}}>
      <h2>Arabic Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}