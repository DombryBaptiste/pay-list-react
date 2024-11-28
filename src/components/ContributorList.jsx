import {Contributor} from "./Contributor.jsx";
import {ButtonAddContributor} from "./ButtonAddContributor.jsx";
import {useState} from "react";
import {getNextId} from "../utils/utils.js";
import {ButtonDeleteContributor} from "./ButtonDeleteContributor.jsx";

export function ContributorList() {

    const [contributorsList, setContributorsList] = useState([
        {id: 1, name: "Baptiste"},
        {id: 2, name: "Océane"}
    ]);

    const handleAddContributor = () => {
        const nextId = getNextId(contributorsList);
        setContributorsList([...contributorsList,
                { id: nextId , name: "" }
            ]
        );
    }

    const handleUpdateContributorName = (id, newName) => {
        setContributorsList(contributorsList.map(contributor =>
            contributor.id === id
                ? { ...contributor, name: newName }
                : contributor
        ));
    };

    const handleDeleteContributon = (id) => {
        console.log(id)
        setContributorsList(contributorsList.filter(c => c.id !== id))
    }

    return <>
        Contributeurs :
        <div className="flex gap-8 items-center">
            {contributorsList.map((contributor) => (
                <div>
                    <Contributor
                        contributor={contributor}
                        key={contributor.id}
                        onUpdateContributorName={handleUpdateContributorName}
                        onDeleteContributor={handleDeleteContributon}>
                    </Contributor>
                </div>
            ))}
            <ButtonAddContributor onAddContributor={handleAddContributor}></ButtonAddContributor>

        </div>

    </>
}