import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CollaborateModal = ({ toggleModal }) => {
  const { projectId } = useParams();
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  // Add email function
  const handleAddEmail = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await axios.post('https://afmtaryv91.execute-api.ap-south-1.amazonaws.com/share/', {
          projectid: projectId,
          email,
        });

        if (response.status === 200) {
          setEmails((prev) => [...prev, email]);
          setEmail('');
          setSuggestions([]);
          setError('');
          toggleModal();
        } else {
          setError('Failed to add email.');
        }
      } catch (error) {
        console.error('Error adding email:', error);
        setError('Failed to add email.');
      }
    }
  };

  const handleRemoveEmail = async (emailToRemove) => {
    const confirmRemove = window.confirm(`Are you sure you want to remove ${emailToRemove}?`);

    if (confirmRemove) {
      try {
        const response = await axios.delete(`https://afmtaryv91.execute-api.ap-south-1.amazonaws.com/share/remove`, {
          params: {
            projectid: projectId,
            user_email: emailToRemove,
          },
        });

        if (response.status === 200) {
          setEmails((prev) => prev.filter((email) => email !== emailToRemove));
          toggleModal();
        } else {
          setError('Failed to remove email.');
        }
      } catch (error) {
        console.error('Error removing email:', error);
        setError('Failed to remove email.');
      }
    }
  };

  const fetchEmailSuggestions = async (initials) => {
    try {
      const response = await axios.get(`https://afmtaryv91.execute-api.ap-south-1.amazonaws.com/share/userslist/${initials}`);
      setSuggestions(response.data.users);
    } catch (error) {
      console.error('Error fetching email suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);

    if (input.length >= 2) {
      fetchEmailSuggestions(input);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestedEmail) => {
    setEmail(suggestedEmail);
    setSuggestions([]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-white mb-4">Add Collaborator</h3>
        <form onSubmit={handleAddEmail}>
          <div className="mb-4 relative">
            <label className="block text-gray-400 mb-1">Email ID</label>
            <input
              type="email"
              value={email}
              placeholder="Enter Name for Recommendations"
              onChange={handleEmailChange}
              className="w-full p-2 font-mono text-sm text-blue-300 bg-gray-800 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-gray-700 rounded w-full mt-1 max-h-48 overflow-y-auto z-10">
                {suggestions.map((suggestedEmail) => (
                  <li
                    key={suggestedEmail}
                    className="px-3 py-2 text-white hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestedEmail)}
                  >
                    {suggestedEmail}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={toggleModal}
              className="px-4 py-2 text-white transition duration-200 ease-in-out bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white transition duration-200 ease-in-out bg-indigo-600 rounded hover:bg-indigo-700 hover:bg-opacity-90"
            >
              Add
            </button>
          </div>
        </form>

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white mb-2">Shared Emails:</h4>
          <ul className="list-disc list-inside">
            {emails.map((emailItem) => (
              <li key={emailItem} className="flex justify-between items-center text-gray-300">
                {emailItem}
                <button
                  onClick={() => handleRemoveEmail(emailItem)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ✖️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollaborateModal;
