import * as tokenService from './tokenService'

import { VoteManagerFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_REACT_APP_BACK_END_SERVER_URL}/api/votes`

async function create(formData: VoteManagerFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    return await res.json()
  } catch (error) {
    console.log(error);
  }
}

export { create }