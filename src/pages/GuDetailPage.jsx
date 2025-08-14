import React from 'react'
import { useParams } from 'react-router-dom'

export default function GuDetailPage() {
  const { guName } = useParams()

  return (
    <div>
      <h1>{guName} 상세 페이지</h1>
      <p>선택된 구: {guName}</p>
    </div>
  )
}
