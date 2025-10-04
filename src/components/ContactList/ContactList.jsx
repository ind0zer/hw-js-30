import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import './ContactList.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts ? contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ) : [];

  if (filteredContacts.length === 0) {
    return (
      <div className="empty">
        {!contacts || contacts.length === 0 ? 'No contacts yet' : 'No contacts found'}
      </div>
    );
  }

  return (
    <ul className="list">
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
