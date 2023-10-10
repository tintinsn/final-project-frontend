import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContentsDTO } from '../types/dto'

const useContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')
        setContents(res.data)

      } catch (err) {
        console.log(err)
      } finally {
        // setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return { contents }
}
export default useContents
