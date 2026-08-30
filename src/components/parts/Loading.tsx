import { LoaderCircle } from 'lucide-react'

interface LoadingProps {
  size?: number,
  className?: string
}

function Loading ({ size = 16, className = ''}: LoadingProps) {
  return (
    <LoaderCircle size={size} className={`animate-spin ${className}`} />
  )
}

export default Loading