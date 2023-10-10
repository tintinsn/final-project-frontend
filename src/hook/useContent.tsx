import { useEffect } from 'react'

const useContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    isLoading(true)
    const fetchData = async () => {}
  }, [])
}
