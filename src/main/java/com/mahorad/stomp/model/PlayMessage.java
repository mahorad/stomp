package com.mahorad.stomp.model;

public class PlayMessage {

    private String note;
    private String url;

    public PlayMessage() {
    }

    public PlayMessage(String note, String url) {
        this.note = note;
        this.url = url;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
