import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import AccountsTable from '../Accounts/AccountsTable'

const acctsArr = []

{/* <MaterialTable
                    title=""
                    columns={[
                    { title: 'Account', field: 'account' },
                    { title: 'Industry', field: 'industry' },
                    { title: 'Website', field: 'website' },
                    { title: 'Notes', field: 'notes' },
                    { title: 'View', field: 'view', render: () => <Button variant="contained" color="primary" href={`/accounts/1`}>View</Button> }
                    ]}
                    data={[
                    { account: 'Upton, Streich and Hane', industry: 'Mechanical or Industrial Engineering', website: 'http://raudooley.name/gilberto_kihn', notes: 'Test note 1; Test note 2' },
                    { account: 'Stamm Group', industry: 'Venture Capital & Private Equity', website: 'http://mullerkub.net/janie', notes: '' },
                    { account: 'Mohr-Rutherford', industry: 'Hospitality', website: 'http://marks.org/tracy.block', notes: '' },
                    { account: 'Gleichner, Christiansen and Kiehn', industry: 'Telecommunications', website: 'http://walker.co/arden_klocko', notes: '' },
                    { account: 'Rempel LLC', industry: 'Events Services', website: 'http://jacobsrippin.info/rea', notes: '' },
                    ]}        
                    options={{
                    sorting: true
                    }}
                /> */}

this.state.accounts.map(account => {
    acctsArr.push({account: account.name, industry: account.industry, website: account.website, notes: account.notes})
})