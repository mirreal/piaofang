import React from 'react'
import './style.scss'

export default function DateBox() {
    return (
        <ul className="dateBar hbox">
            <li className="flex1 canTouch" data-factor="-1">昨天</li>
            <li className="flex1 canTouch active" data-factor="0">今天</li>
            <li className="flex1 canTouch" data-factor="1">明天</li>
            <li className="flex1 canTouch numDate" data-before="日票房">
                <span>更多日期</span><span className="more" />
            </li>
        </ul>
    )
}
