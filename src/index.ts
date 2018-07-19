import test from './module'

console.log(test())

// declare module node {
//   interface NodeModule {
//     hot: any
//   }
// }

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!')
//   })
// }