module.exports = function () {
  //for compilers, need to pass in wallaby in the function above

  return {
  
    files: [
      'lib/**/*.js',
    ],
  
    tests: [
      '__test__/**/*.test.js',
    ],
  
    testFramework: 'jest',
    env: {
      type: 'node',
    },
    // compilers: {
    //   '**/*.js': wallaby.compilers.babel({
    //     'presets': [
    //       'env',
    //       'react',
    //       'stage-0',
    //     ],
    //     'plugins': [
    //       'transform-class-properties',
    //       'transform-decorators',
    //       'transform-react-constant-elements',
    //       'transform-react-inline-elements',
    //     ],
    //   }),
    // },
  };
};