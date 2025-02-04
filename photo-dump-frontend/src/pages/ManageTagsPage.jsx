import { useState, useEffect } from "react";

export function ManageTagsPage() {
  const [tags, setTags] = useState([]);
  const [tagName, setTagName] = useState("");
  const [editingTag, setEditingTag] = useState(null); // Store tag being edited

  // Fetch tags from backend
  useEffect(() => {
    fetch("/tags")
      .then((res) => res.json())
      .then(setTags)
      .catch((err) => console.error("Error fetching tags:", err));
  }, []);

  // Handle tag submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingTag ? "PUT" : "POST";
    const url = editingTag ? `/tags/${editingTag.id}` : "/tags";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tag_name: tagName }),
    });

    if (response.ok) {
      setTagName("");
      setEditingTag(null);
      fetchTags(); // Refresh list
    } else {
      console.error("Failed to save tag");
    }
  };

  // Fetch latest tags
  const fetchTags = () => {
    fetch("/tags")
      .then((res) => res.json())
      .then(setTags)
      .catch((err) => console.error("Error fetching tags:", err));
  };

  // Handle tag deletion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tag?")) return;

    const response = await fetch(`/tags/${id}`, { method: "DELETE" });
    if (response.ok) fetchTags();
    else console.error("Failed to delete tag");
  };

  return (
    <div className="p-10 bg-white shadow-xl rounded-xl max-w-lg mx-auto">
      <h1 className="text-3xl text-purple-700 font-bold mb-6">Manage Tags</h1>

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">
            {editingTag ? "Edit Tag:" : "New Tag:"}
          </span>
          <input
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-purple-500"
            placeholder="Enter tag name"
          />
        </label>
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-2xl hover:bg-purple-700">
          {editingTag ? "Update Tag" : "Add Tag"}
        </button>
      </form>

      <ul className="mt-6">
        {tags.map((tag) => (
          <li key={tag.id} className="flex justify-between p-3 border rounded-lg mb-2 bg-gray-100">
            <span>{tag.tag_name}</span>
            <div>
              <button
                onClick={() => {
                  setTagName(tag.tag_name);
                  setEditingTag(tag);
                }}
                className="text-blue-600 mr-3"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(tag.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
