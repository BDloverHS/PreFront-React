'use client'

import { styled } from 'styled-components'

const _MainTitle = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>
}

export const MainTitle = styled(_MainTitle)``
