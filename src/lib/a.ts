export default 'a';
// @ts-expect-error
typeof window !== 'undefined' && (window.aaa = 'a');
console.log('a');
