import axios from 'axios'

export type CustomerData = {
  id: string
  email: string
  available_credit: number
}

export async function getCustomerData(customerId: string): Promise<CustomerData> {
  try {
    const url = 'http://localhost:3000/api/customers/' + customerId
    const response = await axios.get(url)

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('failed to get customers')
  }
}
