export function Button(props){
    return(
        <>
        <button className={`py-2 px-7  rounded-full font-bold text-lg ${props.style}`}>
            {props.value}
        </button>
        </>
    )
}