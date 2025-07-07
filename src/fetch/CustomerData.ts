import axios from 'axios'

export type CustomerData = {
  id: string
  email: string
  available_credit: number
}

export type CustomerCreateData = {
  id: string
  email: string
  billing_address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

const baseUrl = 'http://localhost:3000/api/customers/'

export async function getCustomerData(customerId: string): Promise<CustomerData> {
  try {
    const url = baseUrl + customerId
    const response = await axios.get(url)

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('failed to get customers')
  }
}

export async function createNewCustomer(customer: CustomerCreateData): Promise<CustomerData> {
  try {
    const response = await axios.post(baseUrl, customer)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('failed to create new customer')
  }
}

export async function getCustomers(): Promise<CustomerData[]> {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('failed to get customers')
  }
}
