'use client'
import React, { useRef, useState } from 'react'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import Logo from '@/components/user/Header/Logo'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const emailSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({
        message: 'Must be a valid email',
    }),
})

const OTP_LENGTH = 5

type EmailFormValues = z.infer<typeof emailSchema>

const Login = () => {
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<EmailFormValues>({
        resolver: zodResolver(emailSchema),
    })

    const [otpDigits, setOtpDigits] = useState(Array(OTP_LENGTH).fill(''))

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value
        if (!/^\d?$/.test(val)) return
        const newOtp = [...otpDigits]
        newOtp[index] = val
        setOtpDigits(newOtp)

        if (val && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (!otpDigits[index] && index > 0) {
                inputRefs.current[index - 1]?.focus()
            }
        }
    }

    const sendOTP = async () => {
        const email = getValues('email')
        if (!email) return

        try {
            setLoading(true)
            console.log('Sending OTP to:', email)
            setShowOtp(true)
        } catch (err) {
            console.error('Failed to send OTP')
        } finally {
            setLoading(false)
        }
    }

    const verifyOTP = async () => {
        const email = getValues('email')
        const otp = otpDigits.join('')
        if (otp.length !== OTP_LENGTH) {
            alert('Enter complete OTP')
            return
        }

        try {
            setLoading(true)
            console.log('Verifying:', { email, otp })
        } catch (err) {
            console.error('Failed to verify OTP')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="mb-8">
                <Logo size="lg" />
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    showOtp ? verifyOTP() : sendOTP()
                }}
                className="w-full max-w-lg border border-[#2C2C2C] rounded-[20px] p-5 shadow-md"
            >
                <Text as="h3" className="text-white text-left mb-2">
                    Forgot Password?
                </Text>
                <Text className="text-gray-400 text-left text-[16px] leading-6 mb-6">
                    Enter your email address to reset your password
                </Text>

                <div className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter Email Address"
                        className="bg-[#FFFFFF1A] border-none text-white placeholder-[#FFFFFF80] rounded-[43.81px]"
                        {...register('email')}
                        readOnly={showOtp}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="text-left mb-12">
                    <span
                        className="text-accent text-sm hover:underline font-medium cursor-pointer"
                        onClick={sendOTP}
                    >
                        {loading ? 'Sending OTP...' : 'Send OTP'}
                    </span>
                </div>

                <div className="flex justify-between gap-2 mb-12 max-w-xs mx-auto">
                    {otpDigits.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => {
                                inputRefs.current[index] = el
                            }}
                            className="w-12 h-12 focus:text-[#A8E543] text-center text-[#FFFFFF80] text-xl bg-[#FFFFFF1A] border-none rounded-full focus:outline-none focus:ring-1 focus:ring-[#A8E54338]"
                        />
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button
                        variant="primary"
                        className="bg-accent text-black w-full"
                        type="submit"
                    >
                        {loading ? 'Processing...' : 'Verify'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login

