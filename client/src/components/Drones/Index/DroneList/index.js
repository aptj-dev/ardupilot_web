// src/component/kDrones/Index/DroneList/index.js

import React, { PropTypes, Component } from 'react'
import * as Table from 'reactabular-table'

const columns = [
    {
	property: 'id',
	header: {
	    label: 'Drone ID',
	    transforms: [
		label => ({
		    onClick: () => alert(`clicked ${label}`)
		})
	    ]
	}
    },
    {
	property: 'name',
	header: {
	    label: 'Drone Name',
	    transforms: [
		label => ({
		    onClick: () => alert(`clicked ${label}`)
		})
	    ]
	}
    },
    {
	property: 'drone_type',
	header: {
	    label: 'Drone Type',
	    transforms: [
		label => ({
		    onClick: () => alert(`clicked ${label}`)
		})
	    ]
	}
    },
    {
	property: 'drone_position',
	header: {
	    label: 'Drone Position',
	    transforms: [
		label => ({
		    onClick: () => alert(`clicked ${label}`)
		})
	    ]
	}
    }
]

export default class DroneList extends Component {
    render() {
	console.log("PROPS: " + JSON.stringify(this.props.drones))
	return (
		<div>
		<Table.Provider
	    className="pure-table pure-table-striped"
	    columns={columns}
		>
		<Table.Header />
		<Table.Body rows={this.props.drones} rowKey="id" />
		</Table.Provider>
		</div>
	)
    }
}
