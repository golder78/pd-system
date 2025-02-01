import { useState, useEffect } from 'react';

export function ViewPhotosPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: 'auto',
    background: 'linear-gradient(135deg, #e0c3fc, #8e44ad)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  const photoCardStyle = {
    padding: '1.5rem',
    background: 'linear-gradient(to right, #fbc2eb, #a18cd1)',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  };

  const hoverCardStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    transition: 'all 0.3s ease-in-out',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#6a1b9a',
    fontWeight: '600',
    marginTop: '1rem',
  };

  const textStyle = {
    fontSize: '0.9rem',
    color: '#6b6b6b',
    marginTop: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>View All Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div
            key={photo.id}
            style={photoCardStyle}
            onMouseEnter={(e) => e.target.style.transform = hoverCardStyle.transform}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <img
              src={photo.file_path}
              alt={photo.description}
              style={imageStyle}
            />
            <p style={descriptionStyle}>{photo.description}</p>
            <p style={textStyle}>Category: {photo.category}</p>
            <p style={textStyle}>Uploaded by: {photo.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
