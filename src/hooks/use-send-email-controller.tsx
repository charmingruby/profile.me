'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsWithChildren, createContext } from 'react'

interface UseSendEmailControllerTypes {}

export const useSendEmailController = createContext(
  {} as UseSendEmailControllerTypes,
)

export function EmailProvider({ children }: PropsWithChildren) {
  return (
    <useSendEmailController.Provider value={{}}>
      {children}
    </useSendEmailController.Provider>
  )
}
