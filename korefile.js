let project = new Project('kraffiti-compressonator', __dirname);

project.dynlib = true;

project.addExclude('.git/**');
project.addExclude('build/**');

project.addFiles('Sources/**');
project.addFile('Compressonator/Compressonator/Examples/Compressonator_Test_Helpers.*');

project.addIncludeDir('Compressonator/Compressonator/Header');
project.addLib('Compressonator/Compressonator/Build/VS2015/Release/Win32/Compressonator_MT');

resolve(project);
