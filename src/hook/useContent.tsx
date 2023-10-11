import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router'

// { content: ContentDTO | null; error: string; isLoading: boolean }
const useContent = (id: string) => {
  const [content, setContent] = useState<ContentDTO | null>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false)
  const { token } = useAuth()
  const navigate = useNavigate()
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

  const updateContent = async (comment: string, rating: number) => {
    if (!content) return
    const updateContentBody: UpdateContentDTO = {
      comment,
      rating,
    }
    setDisableSubmit(true)
    try {
      await axios.patch(`https://api.learnhub.thanayut.in.th/content/${id}`, updateContentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      navigate('/')
    } catch (err) {
      throw new Error('cannot update content')
    } finally {
      setDisableSubmit(false)
    }
  }
  const deleteContent = async () => {
    if (!content) return
    setDisableSubmit(true)
    try {
      await axios.delete(`https://api.learnhub.thanayut.in.th/content/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      navigate('/')
    } catch (err) {
      throw new Error('cannot update content')
    } finally {
      setDisableSubmit(false)
    }
  }

  return { content, isLoading, error, updateContent, disableSubmit, deleteContent }
}

export default useContent
