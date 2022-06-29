import React, { Component } from 'react'
import dataKinh from '../Data/dataGlasses.json'
import Kinh from './Kinh'
import "./style.css"
export default class BaiTapThuKinh extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKinh: dataKinh
        }
    }
    renderKinhList = () => {
        return dataKinh.map((ele) => {
            return (
                <Kinh selectKinh={this.selectKinh} key={ele.id} kinh={ele}/>
            )
        })
    }
    selectKinh = (kinh) => {
        this.setState({
            selectedKinh: kinh,
        })
    }
    render() {
        let {selectedKinh} = this.state;
        return (
            <div className="container vglasses py-3">
                <div className="row  justify-content-between">
                    <div className="col-6 vglasses__left">
                        <h1 className="mb-2">Virtual Glasses</h1>
                        {this.renderKinhList()}
                    </div>
                    <div className="col-5 vglasses__right p-0">
                        <div className="vglasses__card">

                            <div className="vglasses__model" id="avatar">
                                <img className='mb-4' src={selectedKinh.url} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
