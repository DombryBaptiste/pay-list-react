export function NewListButton({OnListButtonClick}) {
    return (
        <div className="flex justify-center mt-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-full py-2 px-4 flex items-center space-x-2"
                onClick={OnListButtonClick}
            >
                <span>Créer nouvelle liste</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
            </button>
        </div>

    );
}
