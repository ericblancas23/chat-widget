import React, { Component } from 'react';
import * as Pusher from 'pusher';


export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            email: undefined,
            myChannel: undefined
        }

        const pusher = new Pusher('PUSHER_APP_KEY', {
            authEndpoint: '',
            cluster: 'PUSHER_APP_CLUSTER',
            encrypted: true
        })

        const chatPage = $(document)
        const chatWindow = $('.chatbubble')
        const chatHeader = chatWindow.find('.unexpanded')
        const chatBody = chatWindow.find('.chat-window')

        this.toggle = this.toggle.bind
        this.showAppropriateChatDisplay = this.showAppropriateChatDisplay.bind
        this.showInitiationDisplay = this.showInitiationDisplay.bind
        this.showChatRoomDisplay = this.showChatRoomDisplay.bind
        this.loginToChatSession = this.loginToChatSession.bind
        this.sendMessageToSupport = this.sendMessageToSupport.bind
        this.NewChatMessage = this.NewChatMessage.bind

    }

    render() {
        
    }
}