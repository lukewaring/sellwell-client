import React from 'react'

export const dataObj = {}

export class DataObject extends React.Component {
    
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/opportunities')
        .then(res => res.json())
        .then(data => {
            data.map((opportunity, index) => {
                switch (opportunity.stage) {
        
                    case 'New':
                        return dataObj['lanes'] = [
                            {
                                id: 'lane1',
                                title: 'New',
                                cards: [{
                                    id: `Card${index+1}`,
                                    title: opportunity.name,
                                    description: opportunity.account.name,
                                    label: `$${opportunity.value}`
                                }]
                            }
                        ]
        
                    case 'Follow-Up':
                        return dataObj['lanes'] = [...dataObj.lanes, {
                            id: 'lane2',
                            title: 'Follow-Up',
                            cards: [{
                                id: `Card${index+1}`,
                                title: opportunity.name,
                                description: opportunity.account.name,
                                label: `$${opportunity.value}`
                            }]
                        }]
        
                    case 'Negotiations':
                        return dataObj['lanes'] = [...dataObj.lanes, {
                            id: 'lane3',
                            title: 'Negotiations',
                            cards: [{
                                id: `Card${index+1}`,
                                title: opportunity.name,
                                description: opportunity.account.name,
                                label: `$${opportunity.value}`
                            }]
                        }]
        
                    case 'Won':
                        return dataObj['lanes'] = [...dataObj.lanes, {
                            id: 'lane4',
                            title: 'Won',
                            cards: [{
                                id: `Card${index+1}`,
                                title: opportunity.name,
                                description: opportunity.account.name,
                                label: `$${opportunity.value}`
                            }]
                        }]
        
                    default:
                        return null
                }  
            })
        })
    }

    render() {
        console.dir(dataObj)
        return <div></div>
    }

}
