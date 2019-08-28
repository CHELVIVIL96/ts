import React from 'react'
import TopBar from './top_bar';
import MenuItem from './menu_side_item';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import {IMenuselected} from "./interfaces";


interface IMenuSide{
    handleClick:(text:String)=> String;
    selected : IMenuselected,
}

const menu_side = (props:IMenuSide) => {


    return (
        <nav>
            <TopBar></TopBar>
            <div className="col-6 mx-0 px-0">
                <div className="menu-side">
                    <div className="row mx-0 px-0 mb-2">
                        <div className="col-12 menu-side__item--user-photo justify-content-center">
                            <img src="http://espadalefotografia.com/wp-content/uploads/2016/08/1822368.jpg" className="rounded-circle" alt="" />
                            <h3 className="mt-2 text-center text-white">Marta Castro</h3>
                        </div>
                    </div>
                    <MenuItem  handleClick={props.handleClick} icon={faIdCard}  selected={props.selected.recursos} text={'Recursos'}></MenuItem>
                    <MenuItem handleClick={props.handleClick} alineamiento={'alignmentFolder'} icon={faFolder}  selected={props.selected.proyectos} text={'Proyectos'}></MenuItem>
                    <MenuItem handleClick={props.handleClick} alineamiento={'alignmentGastos'} icon={faMoneyBillAlt}  selected={props.selected.gastos} text={'Gastos'}></MenuItem>
                    <MenuItem handleClick={props.handleClick} alineamiento={'alignmentHabilidades'} icon={faChartBar}  selected={props.selected.habilidades} text={'Habilidades'}></MenuItem>

                    <div className="row mx-0 px-0">

                        <div className="menu-side__item--login mx-0 px-0 "></div>

                    </div>

                </div>
            </div>


        </nav>
    )

}
export default menu_side;