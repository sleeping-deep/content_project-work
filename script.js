document.addEventListener('DOMContentLoaded', () => {
    const contentForm = document.getElementById('content-form');
    const contentList = document.getElementById('content-list');

    contentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        // Create a new content item
        const contentItem = document.createElement('li');
        contentItem.innerHTML = `<strong>${title}:</strong> ${body}`;

        // Add the new content to the list
        contentList.appendChild(contentItem);

        // Clear the form
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
    });
});
