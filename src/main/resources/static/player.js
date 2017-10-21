var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    } else {
        $("#conversation").hide();
    }
    $("#output").html("");
}

function connect() {
    var socket = new SockJS('/stomp-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/dest/sound/play', function (reply) {
            sendStateMessage();
            showOutput(JSON.parse(reply.body).note);
            var url = 'https://raw.githubusercontent.com/pffy/mp3-piano-sound/master/mp3/a1.mp3'
            new Audio(url).play()
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendStateMessage() {
    var stateMessage = JSON.stringify({'note': 'A#', 'state': 'playing'});
    console.log('sending state message: ' + stateMessage);
    stompClient.send("/app/sound/state", {}, stateMessage);
}

function showOutput(message) {
    $("#output").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) { e.preventDefault(); });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
//    $( "#send" ).click(function() { playNote(); });
});