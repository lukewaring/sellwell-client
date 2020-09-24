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

export const fetchActivities = async () => {
  const response = await fetch('http://localhost:3001/api/v1/activities')
  const activities = await response.json()
  return activities
}

export const fetchContacts = async () => {
  const response = await fetch('http://localhost:3001/api/v1/contacts')
  const contacts = await response.json()
  return contacts
}
