import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function UpdatePhotoPage() {
  const { id } = useParams(); // Get photo ID from URL
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch photo details
  useEffect(() => {
    fetch(`/photos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.description);
        setCategory(data.category_id);
      })
      .catch((err) => console.error('Error fetching photo details:', err));
  }, [id]);

  // Fetch categories (if dynamic)
  useEffect(() => {
    fetch('/categories') // Adjust this endpoint based on your API
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();

    const response = await fetch(`/photos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, category_id: category }),
    });

    if (response.ok) {
      setMessage('✅ Photo updated successfully!');
    } else {
      setMessage('❌ Failed to update photo.');
    }
  };

  return (
    <div className="p-10 bg-white shadow-xl rounded-xl max-w-lg mx-auto">
      <h1 className="text-3xl text-purple-700 font-bold mb-6">Update Photo Details</h1>

      {message && <div className="p-3 mb-4 text-center text-white bg-purple-600 rounded-lg">{message}</div>}

      <form onSubmit={handleUpdate}>
        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Update Description:</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-purple-500"
            placeholder="New description"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Update Category:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-purple-500"
          >
            <option>Choose a category...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-2xl hover:bg-purple-700">
          Update Photo
        </button>
      </form>
    </div>
  );
}