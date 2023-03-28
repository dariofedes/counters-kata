import { solution } from "../src/solution"

describe('solution', () => {
    describe('given the number of counters equals 1', ()=> {
        const numberOfCounters = 1
        describe('and no operation number is higher than 1', () => {
            test.each([
                [[1], [1]],
                [[2], [1, 1]],
                [[5], [1, 1, 1, 1, 1]]
            ])('should incremente the counter by 1 for each operation', (expectedCounter, operations)=> {
                //When
                const counter = solution(numberOfCounters, operations)
    
                //Then
                expect(counter).toEqual(expectedCounter)
            })
        })
    })

    test('should return an array with all the counters set as number of counters', () => {
        // Given
        const numberOfCounters = 2
        const expectedLength = numberOfCounters
        const emptyOperations = []

        // When
        const result = solution(numberOfCounters, emptyOperations)

        // Then
        expect(result).toHaveLength(expectedLength)
    })

})