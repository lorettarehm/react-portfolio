import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from './Project';

function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to="project" role="button" className="btn btn-link">
        Project 1
      </Link>
      <Link to="project" role="button" className="btn btn-link">
        Project 2
      </Link>
      <Routes>
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default Projects;
