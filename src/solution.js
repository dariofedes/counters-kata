export function solution(numberOfCounters, operations) {
    let counters = initializeCounters()

    operations.forEach(operation => {
        incrementCounter(operation);
    })
    
    return counters;

    function incrementCounter(operation) {
        const targetCounterIndex = operation-1
        counters[targetCounterIndex]++
    }

    function initializeCounters() {
        const counters = []
    
        for(let i = 0; i < numberOfCounters; i++) {
            counters.push(0)
        }
    
        return counters
    }
}