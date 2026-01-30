/** @vitest-environment jsdom */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AccountSettings from './index.tsx'

describe('AccountSettings', () => {
  it('renders account setting actions', () => {
    render(<AccountSettings />)

    expect(screen.getByRole('button', { name: '通知設定' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'プライバシー' })).toBeTruthy()
  })
})
