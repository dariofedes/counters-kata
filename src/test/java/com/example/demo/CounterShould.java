package com.example.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.Arrays;

class CounterShould {

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 8})
    void should_return_array_with_length_equal_to_the_counter_number(int numberOfCounters) {
        var expectedLength = numberOfCounters;

        var counter = new Counter();

        var result = counter.solution(numberOfCounters, new int[0]);

        Assertions.assertEquals(expectedLength, result.length);
    }

    @ParameterizedTest
    @ValueSource(strings = { "1", "1,1", "1,1,1", "1,1,1,1,1,1,1"})
    void should_increase_the_counter_for_each_operation(String stringOperations) {
        var numberOfCounters = 1;
        var operations = Arrays.stream(stringOperations.split(","))
                .mapToInt(Integer::parseInt)
                .toArray();
        var expectedCounterValue = operations.length;
        var counter = new Counter();

        var result = counter.solution(numberOfCounters, operations);

        var actualCounterValue = result[0];
        Assertions.assertEquals(expectedCounterValue, actualCounterValue);
    }
}
