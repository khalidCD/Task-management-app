interface buttonProp{
    ButtonName : string
}


function Button({ButtonName}:buttonProp){


    return (
        <button className="btn btn-primary">{ButtonName}</button>
    )
}
export default Button