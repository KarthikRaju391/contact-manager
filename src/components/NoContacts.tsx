import { Link } from "react-router-dom";

const NoContacts = () => {
  return (
    <div>
        <h1>No Contacts Found</h1>
        <Link to="/add-contact" className="text-blue-500 hover:text-blue-600" />
    </div>
  )
};

export default NoContacts;
