import Text from '@/components/ui/Text'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <h1 className="text-accent font-normal text-[28px] font-prociono">
      Snap&Trace
      </h1>
    </Link>
  )
}

export default Logo
