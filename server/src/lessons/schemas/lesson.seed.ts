export const lessonsSeed = [
  {
    name: 'Two Sum',
    code: `const twoSum = function(nums, target) {\n\tlet map = new Map();\n\t\n\tfor(let i = 0; i < nums.length; i ++) {\n\t\tif(map.has(target - nums[i])) {\n\t\t\treturn [map.get(target - nums[i]), i];\n\t\t} else {\n\t\t\tmap.set(nums[i], i);\n\t\t}\n\t}\nreturn [];\n};`,
    difficulty: 'easy',
    lines: 12,
    source: 'https://leetcode.com',
    sourceCode:
      'https://leetcode.com/problems/two-sum/discuss/234005/Neat-JavaScript-Map-O(n)',
    section: '61803bba94d1ea7b489a62a4',
  },
  {
    name: 'Parse Names',
    code: `function parseRequestedNames(names, toCase) {\n\tlet result = [];\n\tfor (let i = 0; i < names.length; i++) {\n\t\tlet splitNames = names[i].split(',');\n\t\tfor (let j = 0; j < splitNames.length; j++) {\n\t\t\tlet name = splitNames[j].trim();\n\t\t\tif (!name) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (toCase === 'uppercase') {\n\t\t\t\tname = name.toUpperCase();\n\t\t\t} else if (toCase === 'lowercase') {\n\t\t\t\tname = name.toLowerCase();\n\t\t\t}\n\t\t\tresult.push(name);\n\t\t}\n\t}\n\treturn result;\n}`,
    difficulty: 'easy',
    lines: 19,
    source: 'https://github.com/facebook/react',
    sourceCode:
      'https://github.com/facebook/react/blob/main/scripts/rollup/build.js',
    section: '61803bba94d1ea7b489a62a4', //js
  },
  {
    name: 'Vue Build',
    code: `function build (builds) {\n\tlet built = 0\n\tconst total = builds.length\n\tconst next = () => {\n\t\tbuildEntry(builds[built]).then(() => {\n\t\t\tbuilt++\n\t\t\tif (built < total) {\n\t\t\t\tnext()\n\t\t\t}\n\t\t}).catch(logError)\n\t}\n\n\tnext()\n}`,
    difficulty: 'easy',
    lines: 14,
    source: 'https://github.com/vuejs/vue',
    sourceCode: 'https://github.com/vuejs/vue/blob/dev/scripts/build.js',
    section: '61803bba94d1ea7b489a62a4',
  },
  {
    name: 'ZigZag Conversion',
    code: `const convert = function(s, numRows) {\n\t// return original string if can't zigzag\n\tif (numRows === 1 || s.length < numRows) return s;\n\n\tlet rows = []\n\tlet converted = '';\n\tlet reverse = false;\n\tlet count = 0\n\n\t// prepare rows\n\tfor (let i = 0; i < numRows; i++) rows[i] = [];\n\t// reverse the push flow when reaching turning points\n\tfor (let i = 0; i < s.length; i++) {\n\t\trows[count].push(s[i]);\n\t\treverse ? count-- : count++;\n\t\tif (count === numRows - 1 || count === 0) reverse = !reverse;\n\t}\n\t// put together converted string\n\treturn rows.reduce((converted, cur) => converted + cur.join(''), '');\n};`,
    difficulty: 'medium',
    lines: 20,
    source: 'https://leetcode.com',
    sourceCode:
      'https://leetcode.com/problems/zigzag-conversion/discuss/3522/Intuitive-Javascript-Solution',
    section: '61803bba94d1ea7b489a62a4',
  },
  {
    name: 'Build Entry',
    code: `function buildEntry (config) {\n\tconst output = config.output\n\tconst { file, banner } = output\n\tconst isProd = /(min|prod)\\.js$/.test(file)\n\treturn rollup.rollup(config)\n\t\t.then(bundle => bundle.generate(output))\n\t\t.then(({ output: [{ code }] }) => {\n\t\t\tif (isProd) {\n\t\t\t\tconst minified = (banner ? banner + '\\n' : '') + terser.minify(code, {\n\t\t\t\t\ttoplevel: true,\n\t\t\t\t\toutput: {\n\t\t\t\t\t\tascii_only: true\n\t\t\t\t\t},\n\t\t\t\t\tcompress: {\n\t\t\t\t\t\tpure_funcs: ['makeMap']\n\t\t\t\t\t}\n\t\t\t\t}).code\n\t\t\t\treturn write(file, minified, true)\n\t\t\t} else {\n\t\t\t\treturn write(file, code)\n\t\t\t}\n\t\t})\n}`,
    difficulty: 'hard',
    lines: 24,
    source: 'https://github.com/vuejs/vue',
    sourceCode: 'https://github.com/vuejs/vue/blob/dev/scripts/build.js',
    section: '61803bba94d1ea7b489a62a4',
  },
  {
    name: 'Rotate Image',
    code: `const rotate = function(matrix) {\n\tfor (let i=0;i<matrix.length;i++) {\n\t\tfor (let j=i;j<matrix[0].length;j++) {\n\t\t\tlet temp = matrix[i][j];\n\t\t\tmatrix[i][j] = matrix[j][i];\n\t\t\tmatrix[j][i] = temp;\n\t\t}\n\t}\n\n\tfor (let i=0;i<matrix.length;i++) {\n\t\tfor (let j=0;j<matrix[0].length/2;j++) {\n\t\t\tlet temp = matrix[i][j];\n\t\t\tmatrix[i][j] = matrix[i][matrix[0].length-j-1];\n\t\t\tmatrix[i][matrix[0].length-j-1] = temp;\n\t\t}\n\t}\n};`,
    difficulty: 'medium',
    lines: 17,
    source: 'https://leetcode.com',
    sourceCode:
      'https://leetcode.com/problems/rotate-image/discuss/430066/JavaScript-Solution',
    section: '61803bba94d1ea7b489a62a4',
  },
  {
    name: 'Prepare Package',
    code: 'async function prepareNpmPackage(name) {\n\tawait Promise.all([\n\t\tasyncCopyTo("LICENSE", `build/node_modules/${name}/LICENSE`),\n\t\tasyncCopyTo(\n\t\t\t`packages/${name}/package.json`,\n\t\t\t`build/node_modules/${name}/package.json`\n\t\t),\n\t\tasyncCopyTo(\n\t\t\t`packages/${name}/README.md`,\n\t\t\t`build/node_modules/${name}/README.md`\n\t\t),\n\t\tasyncCopyTo(`packages/${name}/npm`, `build/node_modules/${name}`),\n\t]);\n\tfilterOutEntrypoints(name);\n\tconst tgzName = (\n\t\tawait asyncExecuteCommand(`npm pack build/node_modules/${name}`)\n\t).trim();\n\tawait asyncRimRaf(`build/node_modules/${name}`);\n\tawait asyncExtractTar(getTarOptions(tgzName, name));\n\tunlinkSync(tgzName);\n}',
    difficulty: 'medium',
    lines: 21,
    source: 'https://github.com/facebook/react',
    sourceCode:
      'https://github.com/facebook/react/blob/main/scripts/rollup/packaging.js',
    section: '61803bba94d1ea7b489a62a4',
  },
];
