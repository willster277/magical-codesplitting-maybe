export default 'c';
// @ts-expect-error
typeof window !== 'undefined' && (window.ccc = 'c');
console.log('c');
