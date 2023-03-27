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
})