'use client'

import React, { useState, useCallback, useActionState } from 'react'
import JoinForm from '../components/JoinForm'
import { processJoin } from '../../services/actions'

const JoinContainer = () => {
  const actionState = useActionState(processJoin)
  const [form, setForm] = useState({})

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])

  const onSelectDate = useCallback((date) => {
    setForm((form) => ({ ...form, birthDt: date }))
  }, [])

  return (
    <JoinForm
      actionState={actionState}
      form={form}
      onChange={onChange}
      onClick={onClick}
      onSelectDate={onSelectDate}
    />
  )
}

export default JoinContainer
