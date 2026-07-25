import React, { useState, useEffect } from "react";
import "../assets/css/Notas.css";
import { useNotes } from "../context/NotesContext.jsx";

export default function Notas() {
  const { notes, loading, deleteNote, fetchNotes } = useNotes();
  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) return <p>Cargando notas...</p>;
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} style={{ backgroundColor: note.color }}>
          <h3>{note.title}</h3>
          <button onClick={() => deleteNote(note.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
