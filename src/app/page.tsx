import Benefits from '@/components/Home/Benefits'
import ExampleofTool from '@/components/Home/ExampleofTool'
import Hero from '@/components/Home/Hero'
import NewIdeas from '@/components/Home/NewIdeas'
import ToolWorks from '@/components/Home/ToolWorks'
import WhatWeOffer from '@/components/Home/WhatWeOffer'
import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import DefaultLayout from '@/components/user/Layouts/DefaulLayout'

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <DefaultLayout>
        <Hero />
        <Benefits />
        <ToolWorks />
        <ExampleofTool />
        <WhatWeOffer/>
        <NewIdeas/>
      </DefaultLayout>
    </div>
  )
}
