export function SearchPhotosPage() {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    background: 'linear-gradient(135deg, #f6d365, #fda085)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '2px solid #D1D5DB',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    outline: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const inputFocusStyle = {
    borderColor: '#A78BFA',
    boxShadow: '0 4px 10px rgba(167, 139, 250, 0.5)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#8B5CF6',
    color: '#ffffff',
    borderRadius: '12px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#7C3AED',
    boxShadow: '0 4px 10px rgba(124, 58, 237, 0.4)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Search Photos</h1>
      <form>
        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Search by Category or Tags:</span>
          <input
            type="text"
            className="w-full"
            style={inputStyle}
            placeholder="Enter search term"
            onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
            onBlur={(e) => e.target.style = { ...inputStyle }}
          />
        </label>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style = buttonHoverStyle}
          onMouseLeave={(e) => e.target.style = buttonStyle}
        >
          Search
        </button>
      </form>
    </div>
  );
}
