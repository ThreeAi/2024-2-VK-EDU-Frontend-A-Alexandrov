import { useState, useContext } from "react";
import "./App.css";
import { PageContext, pages } from "./utils/PageContext";
import PageChat from "./pages/PageChat";
import PageChats from "./pages/PageChats";

function App() {
	const [currentPage, setCurrentPage] = useState(pages.listChats);

	const [switchPage, setSwitchPage] = useState(
		() => () =>
			setCurrentPage((currState) => 
				currState === pages.chat ? pages.listChats : pages.chat
			)
	);

	return (
		<PageContext.Provider value={{ currentPage, switchPage }}>
      {/* <Content/> */}
			{currentPage === pages.listChats ? <PageChats /> : <PageChat />}
		</PageContext.Provider>
	);
}

export default App;

const Content = () => {
	const { currentPage, switchPage } = useContext(PageContext);

	return (
		<div>
			<h1>{currentPage.name}</h1>
			<button onClick={switchPage}>but</button>
		</div>
	);
};
