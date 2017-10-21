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
        stompClient.subscribe('/dest/sound/state', function (reply) {
            var msg = JSON.parse(reply.body);
            showOutput(msg.note + ": " + msg.state);
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

function sendPlayMessage() {
    var playMessage = JSON.stringify({'note': $("#note").val()});
    console.log('sending play message: ' + playMessage);
    showOutput("play " + $("#note").val());
    stompClient.send("/app/sound/play", {}, playMessage);
}

function showOutput(message) {
    $("#output").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) { e.preventDefault(); });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendPlayMessage(); });
});