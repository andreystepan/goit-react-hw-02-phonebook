import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        return <ContactItem key={id} name={name} />;
      })}
    </ul>
  );
};
