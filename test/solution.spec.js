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

    test.each([
        [2],
        [3],
        [10]
    ])('should return an array with all the counters set as number of counters', (numberOfCounters) => {
        // Given
        const expectedLength = numberOfCounters
        const emptyOperations = []

        // When
        const result = solution(numberOfCounters, emptyOperations)

        // Then
        expect(result).toHaveLength(expectedLength)
    })

    test('should increment the counter targeted by the number of the operation when it is less or equal to the number of counters', () => {
        // Given
        const numberOfCounters = 3
        const targetCounter = 2
        const expectedResult = [0, 2, 0]
        const operations = [targetCounter, targetCounter]


        // When
        const result = solution(numberOfCounters, operations)

        // Then
        expect(result).toEqual(expectedResult)
    })

})