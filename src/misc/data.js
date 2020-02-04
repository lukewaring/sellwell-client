// <Board data={this.dataObj}
const dataObj = {lanes: null}

opportunitiesArr.map((opportunity, index) => {
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
                        label: opportunity.value
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
                    label: opportunity.value
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
                    label: opportunity.value
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
                    label: opportunity.value
                }]
            }]

        default:
            return null
    }  
})

// Mirroring this.state.opportunities
// const opportunitiesArr = [
//     {
//       "id": 1,
//       "account_id": 1,
//       "name": "First Deal",
//       "open_date": "2020-02-01",
//       "close_date": null,
//       "stage": "New",
//       "value": 1000,
//       "priority": "Low",
//       "notes": "",
//       "account": {
//         "id": 1,
//         "user_id": 2,
//         "name": "Upton, Streich and Hane",
//         "industry": "Mechanical or Industrial Engineering",
//         "website": "http://raudooley.name/gilberto_kihn",
//         "notes": "Test note 1; Test note 2",
//         "created_at": "2020-01-29T19:39:14.806Z",
//         "updated_at": "2020-02-04T13:43:45.629Z"
//       },
//       "contacts": [
        
//       ],
//       "activities": [
//         {
//           "id": 2,
//           "opportunity_id": 1,
//           "name": "Test Activity",
//           "date": "2020-02-03",
//           "notes": "Test note 1; Test note 2",
//           "created_at": "2020-02-03T23:30:08.868Z",
//           "updated_at": "2020-02-03T23:33:17.225Z"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "account_id": 2,
//       "name": "Second Deal",
//       "open_date": "2020-02-02",
//       "close_date": null,
//       "stage": "Follow-Up",
//       "value": 2000,
//       "priority": "Low",
//       "notes": "",
//       "account": {
//         "id": 2,
//         "user_id": 2,
//         "name": "Stamm Group",
//         "industry": "Venture Capital & Private Equity",
//         "website": "http://mullerkub.net/janie",
//         "notes": null,
//         "created_at": "2020-01-29T19:39:14.818Z",
//         "updated_at": "2020-01-29T19:39:14.818Z"
//       },
//       "contacts": [
        
//       ],
//       "activities": [
        
//       ]
//     },
//     {
//       "id": 3,
//       "account_id": 3,
//       "name": "Third Deal",
//       "open_date": "2020-02-03",
//       "close_date": null,
//       "stage": "Negotiations",
//       "value": 3000,
//       "priority": "Medium",
//       "notes": "",
//       "account": {
//         "id": 3,
//         "user_id": 2,
//         "name": "Mohr-Rutherford",
//         "industry": "Hospitality",
//         "website": "http://marks.org/tracy.block",
//         "notes": null,
//         "created_at": "2020-01-29T19:39:14.830Z",
//         "updated_at": "2020-01-29T19:39:14.830Z"
//       },
//       "contacts": [
        
//       ],
//       "activities": [
        
//       ]
//     },
//     {
//       "id": 4,
//       "account_id": 4,
//       "name": "Fourth Deal",
//       "open_date": "2020-02-04",
//       "close_date": "2020-02-04",
//       "stage": "Won",
//       "value": 4000,
//       "priority": "High",
//       "notes": "",
//       "account": {
//         "id": 4,
//         "user_id": 2,
//         "name": "Gleichner, Christiansen and Kiehn",
//         "industry": "Telecommunications",
//         "website": "http://walker.co/arden_klocko",
//         "notes": null,
//         "created_at": "2020-01-29T19:39:14.836Z",
//         "updated_at": "2020-01-29T19:39:14.836Z"
//       },
//       "contacts": [
        
//       ],
//       "activities": [
        
//       ]
//     }
// ]


// From App.js

    // state = {
    //     opportunities: []
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3001/api/v1/opportunities')
    //     .then(res => res.json())
    //     .then(data => {
    //     this.setState({
    //         opportunities: data
    //     })
    //     })
    // }
