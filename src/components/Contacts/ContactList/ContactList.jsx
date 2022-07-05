import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};
