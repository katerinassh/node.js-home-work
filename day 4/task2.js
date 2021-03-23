// map task

const mapArr = ['Яблоко', 'Ананас', 'Банан'].reduce((acc, elem) => acc += elem[0], '').split('');
console.log(mapArr);

// filter task

const filterArr = ['Яблоко', 'Ананас', 'Банан'].reduce((acc, elem) => elem[0].toLowerCase() == 'а' ? `${ acc } ${ elem }` : acc, '').split(' ').slice(1);
console.log(filterArr);

// forEach task

const forEachArr = ['Яблоко', 'Ананас', 'Банан'].reduce((acc, elem, index) => `${ acc };*${index + 1}: ${elem}`, '').slice(2).split('*');
console.log(forEachArr);