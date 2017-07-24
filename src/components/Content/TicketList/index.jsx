import React from 'react'
import './overview.scss'

export default function Overview() {
    return (
        <div id="ticket_content">
            <div className="indentOut hollow" id="desc-wrap">
                <div className="logo">
                    <span id="dayStr" className="today">
                        2017-07-23
                        周日
                    </span>
                    <span>大盘：</span>
                    <span id="ticket_count">15458.5万</span>
                </div>
                <div id="dayTips" className="update">北京时间每天10点更新票房</div>
            </div>
        </div>
    )
}
