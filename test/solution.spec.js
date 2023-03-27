import { solution } from "../src/solution"

describe('solution', () => {
    test('should leave the counter at 0 when no operations passed and n is 1', () => {
        // Given
        const n = 1
        const a = []

        // When
        const result = solution(n, a)

        // Then
        expect(result).toBe(0)
    });

    test('should increase the counter by 1 when an increase operation is passed and n is 1', ()=> {
        //Given
        const n = 1;
        const a = [1];

        //When
        const result = solution(n, a);
        
        //Then
        expect(result).toBe(1);
    })

    test('should execute all passed operations', () => {
        // Given
        const n = 1
        const a = [1, 1]

        // When
        const result = solution(n, a)

        // Then 
        expect(result).toBe(2)
    })
})