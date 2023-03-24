import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import AddContact from './Addcontact';

class Agenda extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contacts: []
      };
    }

    
  
    componentDidMount() {
      fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => {
          this.setState({
            contacts: data
          });
        })
        .catch(error => {
          console.error('Error al obtener la lista de contactos:', error);
        });
    }
  
    handleContactAdded(contact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact]
      }));
    }

    
  
    render() {
      return (
        <div>
          <h1>Agenda</h1>
          <ContactList contacts={this.state.contacts} />
          <AddContact onContactAdded={contact => this.handleContactAdded(contact)} />
        </div>
      );
    }
  }
  
  // Renderizar el componente principal en el elemento con ID "root"
  ReactDOM.render(<Agenda />, document.getElementById('root'));

  export default Agenda;