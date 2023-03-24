import React from 'react';


// Componente para agregar un nuevo contacto
class Addcontact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        apellido: '',
        telefono: ''
      };
    }
  
    handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(response => response.json())
        .then(data => {
          this.props.onContactAdded(data);
          this.setState({
            nombre: '',
            apellido: '',
            telefono: ''
          });
        })
        .catch(error => {
          console.error('Error al agregar el contacto:', error);
        });
    }
  
    render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Nombre:
            <input type="text" name="nombre" value={this.state.nombre} onChange={event => this.handleInputChange(event)} />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" name="apellido" value={this.state.apellido} onChange={event => this.handleInputChange(event)} />
          </label>
          <br />
          <label>
            Teléfono:
            <input type="text" name="telefono" value={this.state.telefono} onChange={event => this.handleInputChange(event)} />
          </label>
          <br />
          <button type="submit">Agregar</button>
        </form>
      );
    }
  }

  export default Addcontact;