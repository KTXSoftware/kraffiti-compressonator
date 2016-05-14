const solution = new Solution('kraffiti-compressonator');
const project = new Project('kraffiti-compressonator');

solution.dynlib = true;

project.addExclude('.git/**');
project.addExclude('build/**');

project.addFile('Sources/**');

solution.addProject(project);

return solution;
