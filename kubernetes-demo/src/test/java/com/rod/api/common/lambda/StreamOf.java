package com.rod.api.common.lambda;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamOf {
    int arr[] = {1,2,3,4,5};

    @Test
    public void testSmae(){
        IntStream intStream = Arrays.stream(arr);
        intStream.forEach(str -> System.out.print(str + " "));

    }

    @Test
    public void testDifferent(){
        int arr[] = {1,2,3,4,5};
        Stream<int[]> stream = Stream.of(arr);
        stream.forEach(str -> System.out.print(str + " "));
    }

}
