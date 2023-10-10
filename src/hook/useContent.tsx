import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'

const useContent = (id: string): { content: ContentDTO | null; error: string; isLoading: boolean } => {
  const [content, setContent] = useState<ContentDTO | null>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)

        setContent(res.data)
      } catch (err) {
        setError('Data not found')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])
  return { content, isLoading, error }
}

export default useContent
