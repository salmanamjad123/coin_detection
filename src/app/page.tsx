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
        {/* <Button className="max-w-[141px]">Start Now</Button> */}
        {/* <Text as="h1" className="text-center">
          DXF Files Modifications Using AI{' '}
        </Text>
        <Text as="h2" className="text-center">
          Why Choose Foam Layout Tool?{' '}
        </Text>
        <Text className="text-center">
          Effortlessly create precise DXF files for manufacturing custom tool
          drawer inserts with AI-powered automation. Ability to modify DXF files
          (add space next to tool-cutout for fingers). Simplify your workflow
          and take tool organization to the next level. Start your free trial
          today!
        </Text> */}
      </DefaultLayout>
    </div>
  )
}
