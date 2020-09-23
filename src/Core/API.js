export const fetchAccounts = async () => {
  const response = await fetch('http://localhost:3001/api/v1/accounts')
  const accounts = await response.json()
  return accounts
}

export const fetchOpportunities = async () => {
  const response = await fetch('http://localhost:3001/api/v1/opportunities')
  const opportunities = await response.json()
  return opportunities
}
