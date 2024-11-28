/**
 * `ButtonDeleteContributor` Component
 *
 * Renders a button to delete a contributor. When clicked, it triggers the provided `onClickDeleteContributor` function.
 *
 * @param {Function} onClickDeleteContributor - Function called when the button is clicked to delete a new contributor.
 *
 * @example
 * <ButtonDeleteContributor
 *   onClickDeleteContributor={() => console.log("Add Contributor clicked")}
 * />
 */

export function ButtonDeleteContributor({onClickDeleteContributor}) {
    return <button
        onClick={onClickDeleteContributor}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
    </button>
}