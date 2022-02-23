import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer'

const apiKey = 'rje5aez3ndpy';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </div>
  );
}

export default App;
