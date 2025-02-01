export function UploadPhotoPage() {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#6a1b9a',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#555',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#8e24aa',
    color: '#fff',
    padding: '1.2rem',
    borderRadius: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#7b1fa2',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Upload a New Photo</h1>
      <form>
        <div>
          <label style={labelStyle} htmlFor="description">Photo Description:</label>
          <input 
            type="text" 
            id="description"
            placeholder="Enter a description" 
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle} htmlFor="category">Category:</label>
          <select 
            id="category"
            style={inputStyle}
          >
            <option>Choose a category...</option>
            <option>Nature</option>
            <option>Travel</option>
            <option>Food</option>
            <option>Animals</option>
          </select>
        </div>

        <div>
          <label style={labelStyle} htmlFor="file">Upload Photo:</label>
          <input 
            type="file" 
            id="file" 
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Upload Photo
        </button>
      </form>
    </div>
  );
}
