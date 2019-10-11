import { ElementSpy } from '../src/index.js'
const es  = new ElementSpy()
es.observe(document.getElementById('second'),(element ,data) => {
  console.log(element, data)
}, {value: 'many times'})

es.observeOnce(document.getElementById('third'),(element ,data) => {
  console.log(element, data)
}, {value: 'watch 3rd only once'})