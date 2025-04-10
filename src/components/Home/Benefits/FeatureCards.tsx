import { FaMicrochip, FaRocket, FaSlidersH } from 'react-icons/fa'
import React from 'react'
import Text from '@/components/ui/Text'
import precisionIcon from '@/public/images/benefits/precision.svg'
import fastIcon from '@/public/images/benefits/fast.svg'
import analysisIcon from '@/public/images/benefits/analysis.svg'
import Image from 'next/image'

const features = [
  {
    title: 'AI Powered Precision',
    description:
      'Our advanced AI model offers high accuracy in generating DXF Files.startup, small business professionals make informed decisions.',
    icon: precisionIcon,
    colSpan: 'row-span-2', // taller card
  },
  {
    title: 'Fast & Accurate Results',
    description:
      'Our advanced AI model offers high accuracy in generating DXF Files.startup, small business professionals make informed decisions.',
    icon: fastIcon,
  },
  {
    title: 'Customizable Analysis',
    description:
      'Our advanced AI model offers high accuracy in generating DXF Files.startup, small business professionals make informed decisions.',
    icon: analysisIcon,
  },
]

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 lg:max-w-screen-xl md:max-w-screen-md mx-auto">
      {/* Left Tall Card */}
      <div className="bg-[#111113] rounded-2xl p-6 flex flex-col justify-between shadow-md md:row-span-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#A8E54321] mb-4 relative">
          <span className="absolute inset-0 rounded-full border border-[#A8E54310]" />
          <Image
            src={features[0].icon}
            alt={features[0].title}
            width={50}
            height={50}
          />
        </div>

        <div>
          <Text as="h2">{features[0].title}</Text>
          <Text className="mt-3">{features[0].description}</Text>
        </div>
      </div>

      {/* Right Two Smaller Cards */}
      {features.slice(1).map((feature, index) => (
        <div key={index} className="bg-[#111113] rounded-2xl shadow-md">
          <div className="rounded-full border border-[#A8E54305] inline-block mb-4">
            <div className="p-[12px] rounded-full border border-[#A8E5430F]">
              <div className="p-[8px] rounded-full border border-[#A8E54321]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a1a]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2">
            <Text as="h2" className="mt-5">
              {feature.title}
            </Text>
            <Text className="mt-3">{feature.description}</Text>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureCards
