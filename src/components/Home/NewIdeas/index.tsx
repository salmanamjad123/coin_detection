import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import React from 'react'

const NewIdeas = () => {
    return (
        <div className='bg-[#040D18C7] min-h-[555px] mob:h-full flex items-center justify-center'>
            <div className="w-full max-w-[894px] py-10">
                <Text as='h1' className="text-[50px] text-center">Get Updated Or Support New Ideas!!</Text>
                <Text className="text-center max-w-[892px] mx-auto mt-[21px]">Stay in the loop with everything you want to know ! Sign up with your email below for exclusive updates and early access.</Text>

                <div className="flex gap-[25px] justify-center mt-[60px]">
                    <input type="text" placeholder='Enter your email address' className='w-full px-4 max-w-[552px] h-[61px]  border rounded-[42px] blur-background text-[#FFFFFFB8] placeholder:[#FFFFFFB8] outline-none' />
                    <Button className='max-w-[168px] h-[62px] rounded-[75px] text-[23px] font-medium'>Sign Up </Button>
                </div>
            </div>
        </div>
    )
}

export default NewIdeas
