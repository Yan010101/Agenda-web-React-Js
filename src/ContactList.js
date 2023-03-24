import React from 'react';

// Componente para mostrar el listado de contactos
function ContactList(props) {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.nombre}</td>
              <td>{contact.apellido}</td>
              <td>{contact.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default ContactList;