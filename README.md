# NoteIt - A Modern Notes Application

NoteIt is a clean, modern notes application built with  JavaScript and Tailwind CSS. It allows users to create, manage, and organize their notes efficiently with features like pinning and archiving.

## Features

- 📝 Create notes with title and content
- 📌 Pin/unpin important notes
- 📦 Archive/unarchive notes
- 🗑️ Delete notes
- 💾 Persistent storage using localStorage
- 🎨 Modern UI with hover effects and animations
- 📱 Responsive design


## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript
- Material Icons
- LocalStorage API

## Project Structure

```
src/
├── index.html          # Main application page
├── archive1.html       # Archive page
├── main.js            # Main application logic
├── archive.js         # Archive functionality
├── app.js             # Shared functionality
└── output.css         # Styles
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd noteit
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. Access the application at `http://localhost:8000`

## Usage

### Creating Notes
1. Enter a title and note content in the input fields
2. Click the "+" button to create a new note

### Managing Notes
- **Pin/Unpin**: Click the pin icon to pin/unpin a note
- **Archive**: Click the archive icon to move a note to archive
- **Delete**: Click the delete icon to remove a note

### Accessing Archived Notes
1. Click the "Archive" link in the navigation bar
2. View and manage your archived notes
3. Unarchive notes by clicking the archive icon again

## Features in Detail

### Note Creation
- Title and content support
- Automatic saving
- Empty note validation

### Note Organization
- Pinned notes appear at the top
- Archived notes are stored separately
- Clean and intuitive interface

### Data Persistence
- Notes are automatically saved to localStorage
- Data persists across browser sessions
- No data loss on page refresh

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## Future Enhancements

- [ ] User authentication
- [ ] Rich text editing
- [ ] Note categories/labels
- [ ] Search functionality
- [ ] Dark mode
- [ ] Export/Import notes
- [ ] Due dates and reminders

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[AYUSH]

## Acknowledgments

- Material Icons for the beautiful icons
- Tailwind CSS for the styling framework
- Google Fonts for the typography 