package com.mahorad.stomp.model;

public class PlayMessage {

    private String note;

    public PlayMessage() {
    }

    public PlayMessage(String note) {
        this.note = note;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
