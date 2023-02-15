import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://ywiepbwlvqdctutfvila.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aWVwYndsdnFkY3R1dGZ2aWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzkwOTAsImV4cCI6MTk5MjA1NTA5MH0.7U-E-YAUeKVJ5qiD5MhKxVykIHlDQaVWQqP_hYKNVBU")

async function getCountries(){
  const countries = await supabase.from('countries').select()

  console.log(countries);
}

getCountries()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
