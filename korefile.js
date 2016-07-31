const solution = new Solution('kraffiti-compressonator');
const project = new Project('kraffiti-compressonator');

solution.dynlib = true;

project.addExclude('.git/**');
project.addExclude('build/**');

project.addFiles('Sources/**');
project.addFiles('Compressonator/Compressonator/Header/Codec/**');
project.addFiles('Compressonator/Common/Lib/Ext/OpenEXR/v1.4.0/Source/Half/half.h');
project.addFiles('Compressonator/Compressonator/Header/Compressonator.h');
project.addFiles('Compressonator/Compressonator/Header/Compressonator_Documentation.h');
project.addFiles('Compressonator/Compressonator/Header/Common.h');
project.addFiles('Compressonator/Compressonator/Header/Compress.h');
project.addFiles('Compressonator/Compressonator/Header/Internal/CompClient.h');
project.addFiles('Compressonator/Compressonator/Header/Internal/debug.h');
project.addFiles('Compressonator/Compressonator/Header/Version.h');
project.addFiles('Compressonator/Compressonator/Source/Codec/**');
project.addExclude('Compressonator/Compressonator/Source/Codec/ASTC/ARM/astc_averages_and_directions_eigenvectors.cpp')
project.addExclude('Compressonator/Compressonator/Source/Codec/ATI/Codec_ATI_TC.cpp');
project.addFiles('Compressonator/Compressonator/Source/Compress.cpp');
project.addFiles('Compressonator/Compressonator/Source/Compressonator.cpp');
project.addFiles('Compressonator/Common/Lib/Ext/OpenEXR/v1.4.0/Source/Half/half.cpp');

//project.addDefine('USE_SSE');
//project.addDefine('USE_SSE2');
project.addDefine('WIN32');
project.addDefine('_DEBUG');
project.addDefine('_LIB');
project.addDefine('HALF_NO_STD');
project.addDefine('_ITERATOR_DEBUG_LEVEL=2');

project.addIncludeDir('Compressonator/Common/Src');
project.addIncludeDir('Compressonator/Common/Lib/Ext/OpenEXR/v1.4.0/Source/Half');
project.addIncludeDir('Compressonator/Common/Lib/AMD/APPSDK/3-0/include');
project.addIncludeDir('Compressonator/Compressonator/Header');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/BC7');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/BC6H');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ASTC');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ASTC/ARM');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/APC');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ATC');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ATI');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/Block');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/Buffer');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/DXT');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/DXTC');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ETC');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/ETC/etcpack');
project.addIncludeDir('Compressonator/Compressonator/Header/Codec/GT');
project.addIncludeDir('Compressonator/Compressonator/Header/Internal');
//project.addIncludeDir('Compressonator/Compressonator/Utils');

solution.addProject(project);

return solution;
