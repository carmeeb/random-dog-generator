document.addEventListener('DOMContentLoaded', function () {
    const projectList = document.getElementById('projectList');

    // Sample project data
    const projects = [
        { name: 'Project 1', url: 'project1.html' },
        { name: 'Project 2', url: 'project2.html' },
        { name: 'Project 3', url: 'project3.html' }
    ];

    // Add projects to the list
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a>`;
        projectList.appendChild(listItem);
    });
});

  