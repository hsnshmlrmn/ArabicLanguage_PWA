import React from 'react';
import { useParams } from 'react-router-dom';

const lessonContent = {
  alphabet: {
    title: 'Arabic Alphabet',
    content: (
      <div>
        <p>The Arabic alphabet has 28 letters. Here are a few examples:</p>
        <ul>
          <li>ا (Alif)</li>
          <li>ب (Ba)</li>
          <li>ت (Ta)</li>
          <li>ث (Tha)</li>
          <li>ج (Jeem)</li>
        </ul>
      </div>
    )
  },
  greetings: {
    title: 'Greetings & Basic Words',
    content: (
      <div>
        <p>Some useful greetings:</p>
        <ul>
          <li>السلام عليكم (Assalamu Alaikum) - Peace be upon you</li>
          <li>مرحبا (Marhaba) - Hello</li>
          <li>كيف حالك؟ (Kayfa Halak?) - How are you?</li>
        </ul>
      </div>
    )
  },
  numbers: {
    title: 'Numbers in Arabic',
    content: (
      <div>
        <ul>
          <li>١ - One</li>
          <li>٢ - Two</li>
          <li>٣ - Three</li>
        </ul>
      </div>
    )
  }
};

export default function LessonDetail() {
  const { id } = useParams();
  const lesson = lessonContent[id];

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  return (
    <div style={{padding: '2em'}}>
      <h2>{lesson.title}</h2>
      {lesson.content}
    </div>
  );
}