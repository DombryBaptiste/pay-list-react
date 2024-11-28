/**
 * `Contributor` Component
 *
 * Renders an input field to modify the name of a contributor.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.contributor - The contributor's data.
 * @param {number} props.contributor.id - The unique identifier of the contributor.
 * @param {string} props.contributor.name - The current name of the contributor.
 * @param {Function} props.onUpdateContributorName - Function called when the contributor's name is updated.
 *
 * @example
 * <Contributor
 *   contributor={{ id: 1, name: "Baptiste" }}
 *   onUpdateContributorName={(id, name) => console.log(id, name)}
 * />
 */
import {ButtonDeleteContributor} from "./ButtonDeleteContributor.jsx";

export function Contributor({contributor, onUpdateContributorName, onDeleteContributor}) {

    const handleChange = (event) => {
        onUpdateContributorName(contributor.id, event.target.value);
    }

    const handleDelete = (event) => {
        onDeleteContributor(contributor.id);
    }

    return <div className="flex">
        <input type="text"
               onChange={handleChange}
               className="bg-blue-500 hover:bg-blue-700 text-center text-white rounded-full py-2 px-4 flex items-center space-x-2"
               value={contributor.name}
               size={contributor.name.length ? contributor.name.length : 1}>
        </input>
        <ButtonDeleteContributor onClickDeleteContributor={handleDelete}></ButtonDeleteContributor>
    </div>

}