import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentsDTO, CreateContentDTO } from '../types/dto'

const useContents = (): {
  contents: ContentsDTO | null
  isLoading: boolean
  createContent: (videoUrl: string, comment: string, rating: number) => void
  disableSubmit: boolean
} => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')
        setContents(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const createContent = async (videoUrl: string, comment: string, rating: number) => {
    if (!contents) return
    console.log(comment, videoUrl, rating)
    const newContentBody: CreateContentDTO = {
      videoUrl,
      comment,
      rating,
    }
    setDisableSubmit(true)
    try {
      await axios.post('https://api.learnhub.thanayut.in.th/content', newContentBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // console.log(contents)
    } catch (err) {
      // throw new Error('Cannot create this content')
      
    } finally {
      setDisableSubmit(false)
    }
  }
  return { contents, isLoading, createContent, disableSubmit }
}
export default useContents
