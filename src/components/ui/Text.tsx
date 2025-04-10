import React, { forwardRef } from 'react'
import { cn } from '@/utils'

type ComponentAs = 'h1' | 'h2' | 'p'

interface Props {
  children?: React.ReactNode
  className?: string
  as?: ComponentAs
  onclick?: React.MouseEventHandler
  Style?: React.CSSProperties
  dangerouslySetInnerHTML?: { __html: string } // Add this prop
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const {
      children,
      className,
      as,
      onclick,
      Style,
      dangerouslySetInnerHTML,
    } = props

    if (dangerouslySetInnerHTML) {
      // If dangerouslySetInnerHTML is passed, render using this
      return (
        <p
          ref={ref}
          className={cn(
            'font-raleway text-primary text-[20px] font-normal leading-[33.2px]',
            className,
          )}
          onClick={onclick}
          style={Style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML} // Use this here
        />
      )
    }

    if (as === 'h1') {
      return (
        <h1
          ref={ref}
          className={cn(
            'font-raleway text-[#FFFFFF] sm:text-[44.91px] text-[40px] font-bold sm:leading-[60px] leading-[45px]',
            className,
          )}
          onClick={onclick}
          style={Style}
        >
          {children}
        </h1>
      )
    }

    if (as === 'h2') {
      return (
        <h2
          ref={ref}
          className={cn(
            'font-raleway text-[#FFFFFF] text-[27px] font-semibold leading-[28px] ',
            className,
          )}
          onClick={onclick}
        >
          {children}
        </h2>
      )
    }

    return (
      <p
        ref={ref}
        className={cn(
          'font-raleway text-primary text-[20px] font-normal leading-[33.2px]',
          className,
        )}
        onClick={onclick}
      >
        {children}
      </p>
    )
  },
)

Text.displayName = 'Text'

export default Text
