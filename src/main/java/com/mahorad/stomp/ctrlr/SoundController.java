package com.mahorad.stomp.ctrlr;

import com.mahorad.stomp.model.PlayMessage;
import com.mahorad.stomp.model.StateMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import static com.mahorad.stomp.model.AudioRepository.getUrl;

@Controller
public class SoundController {

    @MessageMapping("/sound/play")
    @SendTo("/dest/sound/play")
    public PlayMessage play(PlayMessage message) throws Exception {
        message.setUrl(getUrl(message.getNote()));
        return message;
    }

    @MessageMapping("/sound/state")
    @SendTo("/dest/sound/state")
    public StateMessage state(StateMessage message) throws Exception {
        return message;
    }

}
