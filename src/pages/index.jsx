/**
 * @Author: Patrick Ellison <mirreal>
 * @Date:   2017-07-24T13:05:25+08:00
 * @Email:  zgkm181142521@gmail.com
 * @Last modified by:   mirreal
 * @Last modified time: 2017-07-24T16:07:11+08:00
 * @License: MIT
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Main/'

import '../common/css/base.css'

const ROOT_ID = 'main-page'

function createRootContainer() {
    const $root = document.createElement('div')
    $root.setAttribute('id', ROOT_ID)
    document.body.appendChild($root)

    return $root
}

function getRootContainer() {
    const $root = document.getElementById(ROOT_ID)

    return $root || createRootContainer()
}

const $main = getRootContainer()

ReactDOM.render(
    <Header />,
    $main
)
