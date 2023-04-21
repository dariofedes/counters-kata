package com.example.demo;

import java.util.List;

public class Counter {

    public Counter() {
    }

    public int[] solution(int numberOfCounters, int[] operations) {
        var result = new int[numberOfCounters];
        result[0] = operations.length;
        return result;
    }
}
