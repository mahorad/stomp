package com.mahorad.stomp.model;

import java.util.HashMap;

public class AudioRepository {

    private static final String baseUrl = "https://raw.githubusercontent.com/pffy/mp3-piano-sound/master/mp3/";
    private static final String notFound = "NotFound";

    private static final HashMap<String, String> audios = new HashMap<>();
    static {
        audios.put("A", baseUrl + "a1.mp3");
        audios.put("A#", baseUrl + "a1s.mp3");
        audios.put("B", baseUrl + "b1.mp3");
        audios.put("C", baseUrl + "c1.mp3");
        audios.put("C#", baseUrl + "c1s.mp3");
        audios.put("D", baseUrl + "d1.mp3");
        audios.put("D#", baseUrl + "d1s.mp3");
        audios.put("E", baseUrl + "e1.mp3");
        audios.put("F", baseUrl + "f1.mp3");
        audios.put("F#", baseUrl + "f1s.mp3");
        audios.put("G", baseUrl + "g1.mp3");
        audios.put("G#", baseUrl + "g1s.mp3");
    }

    private static boolean exists(String note) {
        return note != null && audios.containsKey(note);
    }

    public static String getUrl(String note) {
        return exists(note) ? audios.get(note) : notFound;
    }
}
