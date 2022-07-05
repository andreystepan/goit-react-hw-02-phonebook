import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
        </div>
        <ContactForm onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}
