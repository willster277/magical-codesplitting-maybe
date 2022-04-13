export default 'b';
// @ts-expect-error
typeof window !== 'undefined' && (window.bbb = 'b');
console.log('b');
