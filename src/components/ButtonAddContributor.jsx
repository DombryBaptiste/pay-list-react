/**
 * `ButtonAddContributor` Component
 *
 * Renders a button to add a new contributor. When clicked, it triggers the provided `onAddContributor` function.
 *
 * @param {Function} onAddContributor - Function called when the button is clicked to add a new contributor.
 *
 * @example
 * <ButtonAddContributor
 *   onAddContributor={() => console.log("Add Contributor clicked")}
 * />
 */

export function ButtonAddContributor({onAddContributor}) {
    return <button onClick={onAddContributor}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor"
             className="h-10 bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-4 flex items-center space-x-2 text-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
    </button>
}