package com.rod.api.common.junit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ItemTest {
    @Test
    void print() {
        Item s = new Item();
        System.out.println("-->"+s.print());
        Assertions.assertEquals(s.print(), "Hello");
    }

    @Test
    void add() {
    }
}