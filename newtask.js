document.addEventListener('DOMContentLoaded', () => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Animate metrics
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            observer.observe(metric);
            const progress = metric.querySelector('.progress-bar');
            const value = metric.dataset.value;
            progress.style.width = `${value}%`;
        }, index * 100);
    });

    // Generate and animate projects
    const projectsContainer = document.querySelector('.projects');
    const projectData = [
        { name: 'Project 1', progress: 43 },
        { name: 'Project 2', progress: 56 },
        { name: 'Project 3', progress: 98 },
        { name: 'Project 4', progress: 89 },
        { name: 'Project 5', progress: 62 },
        { name: 'Project 6', progress: 74 },
        { name: 'Project 7', progress: 33 }
    ];
    
    projectData.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between mb-2">
                    <span class="project-name">${project.name}</span>
                    <span class="project-progress">${project.progress}%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
        
        setTimeout(() => {
            observer.observe(projectElement);
            const progressBar = projectElement.querySelector('.progress-bar');
            progressBar.style.width = `${project.progress}%`;
        }, index * 100);
    });

    // Generate meetings
    const meetingsContainer = document.querySelector('.meetings');
    const meetings = [
        { day: 12, month: 'FEB', title: 'Team Meeting', time: '10:00 AM - 11:30 AM' },
        { day: 14, month: 'FEB', title: 'Team Meeting', time: '10:00 AM - 11:30 AM' },
        { day: 17, month: 'FEB', title: 'Team Meeting', time: '10:00 AM - 11:30 AM' },
        { day: 19, month: 'FEB', title: 'Team Meeting', time: '10:00 AM - 11:30 AM' }
    ];
    
    meetings.forEach(meeting => {
        const meetingElement = document.createElement('div');
        meetingElement.className = 'meeting';
        meetingElement.innerHTML = `
            <div class="meeting-date">
                <span class="meeting-month">${meeting.month}</span>
                <span class="meeting-day">${meeting.day}</span>
            </div>
            <div class="meeting-info">
                <h3>${meeting.title}</h3>
                <p>${meeting.time}</p>
            </div>
        `;
        meetingsContainer.appendChild(meetingElement);
    });
});