import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Importa a conexão com o Firestore
import { collection, addDoc, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Estilos continuam os mesmos
const styles = {
  container: { padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#fff' },
  form: { marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '0.7rem', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' },
  eventList: { marginTop: '2rem' },
  eventItem: { backgroundColor: '#333', padding: '1rem', borderRadius: '4px', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  h1: { textAlign: 'center', marginBottom: '2rem' },
  actions: { display: 'flex', gap: '1rem', alignItems: 'center' },
  deleteButton: { backgroundColor: '#dc3545', color: 'white', padding: '0.3rem 0.6rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

function Agenda() {
  const [title, setTitle] = useState('');
  const [datetime, setDatetime] = useState('');
  const [notes, setNotes] = useState('');
  const [events, setEvents] = useState([]);

  // Efeito para carregar e ouvir os eventos do Firestore
  useEffect(() => {
    const q = query(collection(db, 'events'), orderBy('datetime', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        eventsArray.push({ ...doc.data(), id: doc.id });
      });
      setEvents(eventsArray);
    });

    // Limpa o listener quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  // Salvar um novo evento
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !datetime) return;

    try {
      await addDoc(collection(db, 'events'), {
        title,
        datetime,
        notes,
        attended: false, // Novo evento sempre começa como não participado
      });
      // Limpar formulário após sucesso
      setTitle('');
      setDatetime('');
      setNotes('');
    } catch (error) {
      console.error("Erro ao adicionar evento: ", error);
    }
  };

  // Marcar/Desmarcar participação
  const toggleAttended = async (event) => {
    const eventDoc = doc(db, 'events', event.id);
    await updateDoc(eventDoc, {
      attended: !event.attended
    });
  };
  
  // Deletar um evento
  const deleteEvent = async (id) => {
    if (window.confirm("Tem certeza que deseja apagar este evento?")) {
      const eventDoc = doc(db, 'events', id);
      await deleteDoc(eventDoc);
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Agenda de Estudos</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Matéria / Título do Evento" value={title} onChange={(e) => setTitle(e.target.value)} style={styles.input} required/>
        <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} style={styles.input} required/>
        <textarea placeholder="Observações" value={notes} onChange={(e) => setNotes(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}>Salvar Evento</button>
      </form>

      <div style={styles.eventList}>
        <h2>Meus Eventos</h2>
        {events.map(event => (
          <div key={event.id} style={styles.eventItem}>
            <h3>{event.title}</h3>
            <p>Data: {new Date(event.datetime).toLocaleString('pt-BR')}</p>
            {event.notes && <p>Observações: {event.notes}</p>}
            <div style={styles.actions}>
              <label>
                <input type="checkbox" checked={event.attended} onChange={() => toggleAttended(event)} />
                Participei
              </label>
              <button onClick={() => deleteEvent(event.id)} style={styles.deleteButton}>Apagar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
