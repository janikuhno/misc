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