import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// import {IMenuselected} from "./interfaces";
interface IMenuItem {
    handleClick:(text:String)=>String;
    selected : boolean;
    text:String;
    icon:IconProp;
    alineamiento?:String;
}
const menu_side_item = (props:IMenuItem) => {
    const { selected, text, icon, alineamiento } = props;

    const handleClick = (e:React.MouseEvent) =>{
        e.preventDefault();
     
    props.handleClick.bind(text);
     }
    
    return (
        <React.Fragment>
            <div className="row mx-0 px-0 mb-2">
                
                {selected ?
                    <div className=" button menu-side__icon--selected align-middle col-2 ">

                        <FontAwesomeIcon className={`${alineamiento} text-white`} icon={icon} size="2x" ></FontAwesomeIcon>



                    </div> :
                    <div className="menu-side__icon align-middle col-2 ">
                        <FontAwesomeIcon className={`${alineamiento} text-white`} icon={icon} size="2x" ></FontAwesomeIcon>
                    </div>
                }
                {selected ? <div  onClick={handleClick} className="buttonItem menu-side__item--selected col-10"><a href="#">{text}</a></div> : <div onClick={handleClick}className="buttonItem menu-side__item col-10"><a href="#">{text}</a></div>}
            </div>
        </React.Fragment>
    )
}

export default menu_side_item;




