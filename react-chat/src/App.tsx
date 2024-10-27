import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./utils/const";
import { PageContext, pages } from "./utils/PageContext";
import PageChat from "./pages/PageChat";
import PageChats from "./pages/PageChats";
import PageEditProfile from "./pages/PageEditProfile";

function App() {
	return (
		<PageContext.Provider value={{ data: pages }}>
			<HashRouter>
				<Routes>
					<Route path={AppRoute.Chats} element={<PageChats />} />
					<Route path={AppRoute.Chat} element={<PageChat />} />
					<Route path={AppRoute.EditProfile} element={<PageEditProfile/>}/>
				</Routes>
			</HashRouter>
		</PageContext.Provider>
	);
}

export default App;
