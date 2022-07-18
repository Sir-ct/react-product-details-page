function Display(props){
    console.log(props)
    return(
        <div className={ props.wstyle === props.name ? "watch selected" : "watch"} onClick={()=>{
            props.onclick(props.name, props.img)
        }}>
          <img src={props.img} alt="" />
        </div>
    )
}

export default Display