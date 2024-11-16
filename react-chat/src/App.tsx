import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './utils/const';
import PageChat from './pages/PageChat';
import PageChats from './pages/PageChats';
import PageEditProfile from './pages/PageEditProfile';
import PageLogin from './pages/PageLogin';
import { CentrifugeContext } from './contexts/CentrifugoContext';
import { useEffect, useState } from 'react';
import { Centrifuge, Subscription } from 'centrifuge';
import { CentrifugoService, Message } from './api';
const wsUrl = import.meta.env.VITE_WS_URL || '';


function App () {

  const [centrifuge, setCentrifuge] = useState<Centrifuge | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);

  const connect = async () => {
    const tokenCreate = (await CentrifugoService.centrifugoConnectCreate()).token;
    const centrifuge = new Centrifuge(wsUrl, {
      token: tokenCreate
    });

    const tokenSubscription = (await CentrifugoService.centrifugoSubscribeCreate()).token
    const subscription = centrifuge.newSubscription(localStorage.getItem('userId') || '', {
      token: tokenSubscription
    });
  
    subscription.on('publication', (ctx) => {
      const newMessage: Message = ctx.data.message;
      setNewMessage(newMessage);
    });
  
    subscription.subscribe();
    centrifuge.connect();
    setSubscription(subscription);
    setCentrifuge(centrifuge);
  }

  useEffect(() => {
    connect();
    return () => {
      if (centrifuge)
        centrifuge.disconnect();
      if (subscription) {
        subscription.removeAllListeners();
        subscription.unsubscribe();
      }
    };
  }, []);
  
  return (
    <CentrifugeContext.Provider value={{centrifuge: centrifuge, subscription: subscription, newMessage: newMessage, setNewMessage: setNewMessage}}>
      <HashRouter>
        <Routes>
          <Route path={AppRoute.Login} element={<PageLogin />} />
          <Route path={AppRoute.Chats} element={<PageChats />} />
          <Route path={AppRoute.Chat} element={<PageChat />} />
          <Route path={AppRoute.EditProfile} element={<PageEditProfile />} />
        </Routes>
      </HashRouter>
    </CentrifugeContext.Provider>
  );
}

export default App;
