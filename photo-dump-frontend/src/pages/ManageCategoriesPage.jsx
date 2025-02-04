import { useState, useEffect } from 'react';

export function ManageCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/categories/${editingId}` : '/categories';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category_name: categoryName })
      });
      if (response.ok) {
        setCategoryName('');
        setEditingId(null);
        fetchCategories(); // Refresh categories list
      }
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleEdit = (category) => {
    setCategoryName(category.category_name);
    setEditingId(category.id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/categories/${id}`, { method: 'DELETE' });
      if (response.ok) {
        fetchCategories();
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="p-10 bg-white shadow-xl rounded-xl max-w-md mx-auto">
      <h1 className="text-3xl text-purple-700 font-bold mb-6 text-center">Manage Categories</h1>
      <form onSubmit={handleAddCategory}>
        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Category Name:</span>
          <input 
            type="text" 
            value={categoryName} 
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name" 
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-purple-500" 
          />
        </label>
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-2xl hover:bg-purple-700">
          {editingId ? 'Update Category' : 'Add Category'}
        </button>
      </form>
      
      <ul className="mt-6">
        {categories.map(category => (
          <li key={category.id} className="flex justify-between items-center p-3 border-b">
            <span>{category.category_name}</span>
            <div>
              <button className="text-blue-500 mr-2" onClick={() => handleEdit(category)}>Edit</button>
              <button className="text-red-500" onClick={() => handleDelete(category.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
