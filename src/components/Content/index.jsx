import React, { Component } from 'react'
import axios from 'axios'
import 'es6-promise/auto'
import Overview from './Overview/'
import TicketList from './TicketList/'

export default class Content extends Component {
    componentWillMount() {
        // this.fetchData()
    }
    fetchData() {
        axios.get('//127.0.0.1:3000')
            .then(res => {
                /* eslint-disable no-console */
                console.log(res.data)
                /* eslint-enable no-console */
            })
    }
    render() {
        return (
            <section>
                <Overview />
                <TicketList />
            </section>
        )
    }
}
