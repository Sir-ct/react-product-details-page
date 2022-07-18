function Feature(props){
    console.log(props)
    return(
        <div className={props.feat === props.statefeat ? "feat-divs feat-select": "feat-divs"} onClick={()=>{
            props.onclick(props.feat)
        }}>
            {props.feat}
        </div>
    )
}

export default Feature