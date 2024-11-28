import {NewListButton} from "./components/NewListButton.jsx";
import React from "react";
import {PayList} from "./components/PayList.jsx";

export default function App() {

    const [list, setList] = React.useState([]);
    const [contributors, setContributors] = React.useState([]);

    const handleListButtonClick = () => {
        setList([...list, []]);
    }

    function handleAddContributor(contributor) {
        setContributors([...contributors, contributor])
    }
    return <div className="flex flex-col justify-center">
        <NewListButton OnListButtonClick={handleListButtonClick}></NewListButton>
        <PayList OnAddContributor={handleAddContributor}></PayList>
    </div>

}