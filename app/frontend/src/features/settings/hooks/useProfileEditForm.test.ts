/** @vitest-environment jsdom */
import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useProfileEditForm } from './useProfileEditForm'

const mutate = vi.fn()

vi.mock('@/api/routes/users', () => {
  return {
    useUpdateProfileMutation: () => ({ mutate, isPending: false }),
  }
})

describe('useProfileEditForm', () => {
  it('submits trimmed values and calls onSuccess', async () => {
    const onSuccess = vi.fn()
    const onCancel = vi.fn()

    const { result } = renderHook(() =>
      useProfileEditForm({
        initialValues: {
          userName: 'Alice',
          bio: null,
          avatarUrl: null,
        },
        onSuccess,
        onCancel,
      }),
    )

    act(() => {
      result.current.form.setFieldValue('userName', ' Alice ')
      result.current.form.setFieldValue('bio', 'Hello world')
      result.current.form.setFieldValue('avatarUrl', '')
    })

    await act(async () => {
      await result.current.form.handleSubmit()
    })

    expect(mutate).toHaveBeenCalledWith({
      userName: 'Alice',
      bio: 'Hello world',
      avatarUrl: null,
    })
    expect(onSuccess).toHaveBeenCalled()
  })
})
