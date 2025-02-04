import { useState, useEffect } from 'react';

export function ViewPhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error("Error fetching photos:", error));
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-br from-purple-200 to-purple-500 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-bold text-purple-700 text-center uppercase mb-6">View All Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`p-6 bg-gradient-to-r from-pink-200 to-purple-300 rounded-xl shadow-lg transform transition-transform duration-300 ${
              hoveredPhoto === photo.id ? 'scale-105 shadow-2xl' : ''
            }`}
            onMouseEnter={() => setHoveredPhoto(photo.id)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            <img
              src={photo.file_path}
              alt={photo.description}
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="text-xl font-semibold text-purple-800 mt-3">{photo.description}</p>
            <p className="text-sm text-gray-600 mt-1">Category: {photo.category || 'Uncategorized'}</p>
            <p className="text-sm text-gray-600">Uploaded by: {photo.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}