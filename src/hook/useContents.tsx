import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentsDTO } from '../types/dto'

const useContents = (): { contents: ContentsDTO | null; isLoading: boolean } => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
  return { contents, isLoading }
}
export default useContents
