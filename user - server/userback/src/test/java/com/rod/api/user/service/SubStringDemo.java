package com.rod.api.user.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


import javax.swing.text.DateFormatter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.logging.SimpleFormatter;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
public class SubStringDemo {
    @Test
    public void 문자열_분할() throws Exception {
        String str = "a,b,c";
        // a,b,c,d,e,f
        String[] arr = str.split(",");
        assertThat(arr.length).isEqualTo(6);
        System.out.println();
    }

    @Test
    public void 주민번호로_성별_구분() throws Exception {
        String human1 = "970301-1";
        String human2 = "950101-2";
        String human3 = "020101-3";
        String human4 = "020101-4";
        //외국인
        String human5 = "730101-5";
        String human6 = "820101-6";
        String human7 = "120101-7";
        String human8 = "050101-8";

        System.out.println("휴먼 1 : " + human1);

        assertThat(getGender(human1)).isEqualTo("M");
        //a,b,c,d,e,f
        String[] arr = null;
        //주민번호를 통해서 나이와 성별(gender)를 출력하시오. 단 나이는 만나이로 표기하시오.
    }

    private String getGender(String ssn) {
        return switch (ssn.charAt(7)) {
            case '1', '3', '5' -> "M";
            case '2', '4', '6' -> "F";
            default -> "Error";
        };
    }

    @Test
    public void sample() {
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        assertThat(year).isEqualTo(2024);
        int month = now.getMonthValue();
        assertThat(month).isEqualTo(4);
        int day = now.getDayOfMonth();
        assertThat(day).isEqualTo(24);
    }

    @Test
    public void birthYear() {
        String ssn = "970301-1";
        int birthYear;
        switch (ssn.charAt(7)) {
            case '1', '2', '5', '6' -> birthYear = Integer.parseInt(ssn.substring(0, 2)) + 1900;
            case '3', '4', '7', '8' -> birthYear = Integer.parseInt(ssn.substring(0, 2)) + 2000;

            default -> throw new IllegalStateException("Unexpected value: " + ssn.charAt(7));
        }
        assertThat(birthYear).isEqualTo(1997);
    }

    @Test
    public void oldAge(){
        LocalDate now = LocalDate.now();
        int year = now.getYear(); //2024

        String ssn = "970301-1";

        int birthYear =switch (ssn.charAt(7)) {
            case '1', '2', '5', '6' -> birthYear = Integer.parseInt(ssn.substring(0, 2)) + 1900;
            case '3', '4', '7', '8' -> birthYear = Integer.parseInt(ssn.substring(0, 2)) + 2000;

            default -> throw new IllegalStateException("Unexpected value: " + ssn.charAt(7));
        };

        int oldAge = year-birthYear+1;
        assertThat(oldAge).isEqualTo(28);
    }

    @Test
    public void newAge(){
        LocalDate now = LocalDate.now();
        String dayInfo = now.format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        String ssn = "970301-1";
        String birthYear = switch (ssn.charAt(7)) {
            case '1', '2', '5', '6' -> "19"+ssn.substring(0,2);
            case '3', '4', '7', '8' -> "20"+ssn.substring(0,2);
            default -> "18"+ssn.substring(0,2);
        };
        String brithInfo = birthYear+ssn.substring(2,4)+ssn.substring(4,6);

        int newAge = (Integer.parseInt(dayInfo)-Integer.parseInt(brithInfo))/10000;
        assertThat(newAge).isEqualTo(27);
    }

    @Test
    public void getAgeUsingLambda(){
        String ssn = "970301-1";
        int s = Stream.of(ssn)
                .map(i->i.substring(0,2))
                .map(i->switch (ssn.charAt(7)){
                    case '1', '2', '5', '6' -> "19" + i;
                    case '3', '4', '7', '8' -> "20" + i;
                    default -> "18" + i;
                })
                .map(i->i+ssn.substring(2,4)+ssn.substring(4,6))
                .map(i->(Integer.parseInt(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")))-Integer.parseInt(i))/10000)
                .findAny().get();
        assertThat(s).isEqualTo(27);
    }
}





//        String ssn = "970301 - 1";
//        int birthYear = Integer.parseInt(ssn.substring(0,2));
//        birthYear += 1900;
//        assertThat(birthYear).isEqualTo(1997);
//
//        String ssn2 = "020301 - 4";
//        int birthYear2 = Integer.parseInt(ssn2.substring(0,2));
//        birthYear2 += 2000;
//        assertThat(birthYear2).isEqualTo(2002);
