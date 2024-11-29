import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './utils/const';
import PageChat from './pages/PageChat';
import PageChats from './pages/PageChats';
import PageEditProfile from './pages/PageEditProfile';
import PageLogin from './pages/PageLogin';
import { CentrifugeContext } from './contexts/CentrifugoContext';
import { useEffect, useState } from 'react';
import { Centrifuge, Subscription } from 'centrifuge';
import { CentrifugoService, Message } from './api';
import { Token } from './api/models/Token';
import { useAppDispatch, useAppSelector } from './hooks';
import { getUserAuthStatus } from './store/userProcess/selectors';
import { refreshAction } from './store/userProcess/userActions';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { NotFound } from './pages/PageNotFound';
const wsUrl = import.meta.env.VITE_WS_URL || '';


function App () {

  const [centrifuge, setCentrifuge] = useState<Centrifuge | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [newMessage, setNewMessage] = useState<Message | null>(null);

  const AuthStatus = useAppSelector(getUserAuthStatus)
  const dispatch = useAppDispatch();

  const connect = async () => {
    const centrifuge = new Centrifuge(wsUrl, {
      getToken: () =>
        CentrifugoService.centrifugoConnectCreate()
          .then((response: Token) => response.token)
          .catch((error) => {
            console.error('Error fetching connection token:', error);
            throw error;
          }),
    });

    const subscription = centrifuge.newSubscription(localStorage.getItem('userId') || '', {
      getToken: () =>
        CentrifugoService.centrifugoSubscribeCreate()
          .then((response: Token) => response.token)
          .catch((error) => {
            console.error('Error fetching subscription token:', error);
            throw error;
          }),
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
    if (AuthStatus === AuthorizationStatus.Auth)
      connect();
    return () => {
      if (centrifuge)
        centrifuge.disconnect();
      if (subscription) {
        subscription.removeAllListeners();
        subscription.unsubscribe();
      }
    };
  }, [AuthStatus]);

  useEffect(() => {
    const token = localStorage.getItem('refreshToken')
    if (token) {
      dispatch(refreshAction(token));
    }
  },[])
  
  return (
    <CentrifugeContext.Provider value={{centrifuge: centrifuge, subscription: subscription, newMessage: newMessage, setNewMessage: setNewMessage}}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<PrivateRoute requiredStatuses={[AuthorizationStatus.Auth]} redirect={AppRoute.Login} />}>
            <Route path={AppRoute.Chats} element={<PageChats />} />
            <Route path={AppRoute.Chat} element={<PageChat />} />
            <Route path={AppRoute.EditProfile} element={<PageEditProfile />} />
          </Route>

          <Route path='/' element={<PrivateRoute requiredStatuses={[AuthorizationStatus.NoAuth, AuthorizationStatus.Unknown]} redirect={AppRoute.Chats} />}>
            <Route path={AppRoute.Login} element={<PageLogin />} />
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </CentrifugeContext.Provider>
  );
}

export default App;
