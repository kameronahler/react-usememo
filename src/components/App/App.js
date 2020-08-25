import React from 'react'
import ExpensiveComponent from '../ExpensiveComponent/ExpensiveComponent'
import MemoizedComponent from '../MemoizedComponent/MemoizedComponent'

export default function App() {
  return (
    <>
      <h1>Don't run this on a literal potato</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flexGrow: 1 }}>
          <header>
            <h2>Memoized</h2>
          </header>
          <MemoizedComponent />
        </div>
        <div style={{ flexGrow: 1 }}>
          <header>
            <h2>Expensive</h2>
          </header>
          <ExpensiveComponent />
        </div>
      </div>
    </>
  )
}
