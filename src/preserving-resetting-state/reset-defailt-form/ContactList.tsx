export default function ContactList({
                                        contacts,
                                        selectedId,
                                        onSelect
                                    }) {
    return (
        <section>
            <ul className={"flex gap-4"}>
                {contacts.map(contact =>
                    <li key={contact.id} className={"bg-gray-400 rounded-md p-2"}>
                        <button onClick={() => {
                            onSelect(contact.id);
                        }}>
                            {contact.id === selectedId ?
                                <b>{contact.name}</b> :
                                contact.name
                            }
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}
