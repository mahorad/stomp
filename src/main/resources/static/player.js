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
        stompClient.subscribe('/dest/sound/play', function (message) {
            var playMessage = JSON.parse(message.body);
            var state = (playMessage.url === 'NotFound' ? 'notFound' : 'playing');
            var stateMessage = JSON.stringify({'note': playMessage.note, 'state': state});
            sendStateMessage(stateMessage);
            showOutput(playMessage.note);
            new Audio(playMessage.url).play()
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

function sendStateMessage(message) {
    console.log('sending state message: ' + message);
    stompClient.send("/app/sound/state", {}, message);
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
