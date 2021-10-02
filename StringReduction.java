/*
Have the function StringReduction(str) take the str parameter being passed
and return the smallest number you can get through the following reduction method.
The method is: Only the letters a, b, and c will be given in str
and you must take two different adjacent characters and replace it with the third.
For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything.
This method is done repeatedly until the string cannot be further reduced,
and the length of the resulting string is to be outputted.
For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc").
The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a",
so you have "aab", then "ab" reduces to "c",
and the final string "ac" is reduced to "b" so the output should be 1.
*/
import java.util.*;

class StringReduction {
    static String reduce(String str) {
        HashMap<String, String> replacements = new HashMap<String, String>();
        replacements.put("ab", "c");
        replacements.put("ac", "b");
        replacements.put("bc", "a");
        replacements.put("ba", "c");
        replacements.put("ca", "b");
        replacements.put("cb", "a");

        String lastString = "";
        while (str != lastString) {
            lastString = str;
            for (String i : replacements.keySet()) {
                str = str.replace(i, replacements.get(i));
            }
        }
        String s = String.valueOf(str.length());
        return s;
    }
    public static void main(String[] args) {
        String str = "cab";
        System.out.println(reduce(str));
    }
}