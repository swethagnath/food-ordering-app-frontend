import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

function LoadingButton() {
  return (
    <Button>
        <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
        Loading
    </Button>
  )
}

export default LoadingButton