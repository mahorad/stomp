# STOMP over Websocket
An application based on the Spring's original example (https://spring.io/guides/gs/messaging-stomp-websocket/) in regards to Websocket communication using STOMP protocol implemented using Spring boot. The main intention of this application is to get a basic understanding of STOMP specifications and concepts such as the broker/server, clients, destinations/topics, latency, partitioning/failures and etc.

## Application Structure
The application mimics the communication between a vehicle's instrument cluster (IC) and the infotainment panel for playing system sound. The following two types of clients can be identified within application:

- A client (e.g. IC) to request a musical note to be played (destination: /dest/sound/play)
- A client (e.g. infotainment) to send state updates such as playing/stopped/notFound (destination: /dest/sound/state).

At startup, a simple in-memory broker will run to expose the two mentioned destinations for play command & play state.

## Running application
After cloning the project compile and run the application using the following commands:

``` bash
mvn clean
mvn spring-boot:run
```

Having the application running, start two browser tabs with the following addresses:

- The instrument cluster client that requests musical notes is found at: http://localhost:8080/client.html

- The infotainment panel client to play the requested sounds and replies with updates can be reached at: http://localhost:8080/player.html

Try to connect both clients to the server then from the IC client send musical note string values (e.g. C, C#, E, F, G#)
