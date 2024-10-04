
const bookmarkList = document.getElementById('bookmarkList');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');

// Event listener for adding a bookmark
addBookmarkBtn.addEventListener('click', addBookmark);


function addBookmark() {
  const name = document.getElementById('bookmarkName').value;
  const url = document.getElementById('bookmarkURL').value;

  if (name === '' || url === '') {
    alert('Please fill in both fields');
    return;
  }

  const bookmark = {
    name: name,
    url: url
  };

  // Store in local storage
  let bookmarks = [];
  if (localStorage.getItem('bookmarks')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  }
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Clear the form
  document.getElementById('bookmarkName').value = '';
  document.getElementById('bookmarkURL').value = '';

  // Re-render the bookmark list
  renderBookmarks();
}

// Function to render bookmarks
function renderBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarkList.innerHTML = '';

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      <button class="delete-btn" onclick="deleteBookmark(${index})">Delete</button>
    `;
    bookmarkList.appendChild(li);
  });
}

// Function to delete a bookmark
function deleteBookmark(index) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  renderBookmarks();
}

// Initial render
renderBookmarks();
