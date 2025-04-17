'use client'
import React from 'react'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import Logo from '@/components/user/Header/Logo'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({
        message: 'Must be a valid email',
    }),
    password: z.string().refine((value) => value.trim().length > 0, {
        message: 'Password is required',
    }),
})

type LoginFormValues = z.infer<typeof loginSchema>

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log('Login Data:', data)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="mb-8">
                <Logo size="lg" />
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg border border-[#2C2C2C] rounded-[20px] p-5 shadow-md"
            >
                <Text as="h3" className="text-white text-left mb-2">
                    Reset Password
                </Text>
                <Text className="text-gray-400 text-left text-[16px] leading-6 mb-6">
                    Please enter you new password to continue to snap & trace
                </Text>

                <div className="mb-4">
                    <Label htmlFor="password">New Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        withIcon
                        className="bg-[#FFFFFF1A] border-none text-white placeholder-gray-400 rounded-[43.81px]"
                        {...register('password')}
                    />
                    {errors.password && errors.password.message === 'Password is required' && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="mb-14">
                    <Label htmlFor="password">Confirm New Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        withIcon
                        className="bg-[#FFFFFF1A] border-none text-white placeholder-gray-400 rounded-[43.81px]"
                        {...register('password')}
                    />
                    {errors.password && errors.password.message === 'Password is required' && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <Button
                        variant="primary"
                        className="bg-accent text-black w-full"
                        type="submit"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login
