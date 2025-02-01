export function ManageCategoriesPage() {
  const containerStyle = {
    padding: '2.5rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '3rem auto',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#6B46C1',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const formLabelStyle = {
    display: 'block',
    marginBottom: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #D1D5DB',
    borderRadius: '15px',
    outline: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#6B46C1',
    color: 'white',
    padding: '1rem',
    width: '100%',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
  };

  const buttonHoverStyle = {
    backgroundColor: '#553C9A',
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Manage Categories</h1>
      <form>
        <label style={formLabelStyle}>
          <span style={{ fontSize: '1.125rem', fontWeight: '500', color: '#4A5568' }}>Category Name:</span>
          <input
            type="text"
            placeholder="Enter category name"
            style={inputStyle}
          />
        </label>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
