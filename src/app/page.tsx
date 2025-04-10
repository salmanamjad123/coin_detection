import Benefits from '@/components/Home/Benefits'
import Hero from '@/components/Home/Hero'
import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import DefaultLayout from '@/components/user/Layouts/DefaulLayout'

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <DefaultLayout>
        <Hero />
        <Benefits />
       
      </DefaultLayout>
    </div>
  )
}
