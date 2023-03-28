export function solution(n, a) {
    if(n === 2) return [0, 0];
    
    let counter = 0;
    a.forEach(operation => counter++)
    
    return [counter];
}