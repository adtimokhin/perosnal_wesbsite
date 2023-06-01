
function TextLink(props){

    return (<a href={props.link} target="_blank" className="bg-main-100 m-1 text-light p-1 font-display font-light hover:underline underline-offset-2 decoration-main-600 active:decoration-main-500">{props.children}</a>)
}

export default TextLink