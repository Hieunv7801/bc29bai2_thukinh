import React, { Component } from 'react'

export default class Kinh extends Component {
    render() {
        const {url} = this.props.kinh;
        return (
            <div>
                <div  id="vglassesList">
                    <div onClick={() => this.props.selectKinh(this.props.kinh)}>
                    <img  className='mb-3'  src={url} alt="" srcset="" width={100} />
                    </div>
                </div>
            </div>
        )
    }
}
