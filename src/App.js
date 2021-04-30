
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import FilterContacts from './components/FilterContacts';
import './styles/container.scss';

const App = () => (
  <div className="container">
    <h2 className="title title__main">Phonebook</h2>
    <Form />
    <h2 className="title">Contacts</h2>
    <FilterContacts />
    <ContactsList />
  </div>
);


export default App;









//before Redax

// state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.сontacts;
  //   const nextContacts = this.state.contacts;

  //   if (prevContacts !== nextContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // formSubmitHandler = ({ name, number }) => {
  //   if (!this.isUniqueContact(name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const contact = {
  //     id: shortid(),
  //     name,
  //     number,
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, contact],
  //   }));
  // };

  // isUniqueContact = name => {
  //   const { contacts } = this.state;

  //   return !contacts.some(item => item.name === name);
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLocaleLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter),
  //   );
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };