package com.mahorad.stomp.model;

public class StateMessage {

    private String note;
    private String state;

    public StateMessage() {
    }

    public StateMessage(String note, String state) {
        this.note = note;
        this.state = state;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
