import React from 'react'
import './menu.scss'

export default function Menu() {
    return (
        <div className="menu-list">
            <a className="active" href="javascript:;">票房</a>
            <a href="/show">排片</a>
            <a href="/seat">上座</a>
            <a href="/store">影库</a>
            <a href="/company/cinema">影院</a>
            <a href="/company/invest">影投</a>
        </div>
    )
}
