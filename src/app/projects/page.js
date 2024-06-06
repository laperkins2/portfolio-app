import React from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Project 1',
      githubLink: 'https://github.com/laperkins2/portfolio.git',
    },
    {
      name: 'Project 2',
      githubLink: 'https://laperkins2.github.io/level2Capstone/',
    },
  ];

  return (
    <div>
      <h1>Projects Page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
