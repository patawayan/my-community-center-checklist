const baseUrl = import.meta.env.VITE_FUNCTION_URL

export const fetchGet = async (url: string) => {
  const response = await fetch(`${baseUrl}/${url}`)
  return response.json()
}

export const fetchPost = async (url: string, body: any) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(body)
  })
  return response.json()
}
