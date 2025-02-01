export function HomePage() {
  const containerStyle = {
    padding: '2.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#7e57c2',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '1rem',
  };

  const subTextStyle = {
    fontSize: '1rem',
    color: '#777',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Photo Dump System</h1>
      <p style={paragraphStyle}>
        Manage your photos, organize them with categories and tags, and search through your collection seamlessly.
      </p>
      <p style={subTextStyle}>Navigate using the menu above to get started!</p>
    </div>
  );
}
