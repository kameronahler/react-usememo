import React, { useState, useMemo } from 'react'

export default function MemoizedComponent() {
  const ImExpensiveToRun = (arg) => {
    let generatedItemsArr = []
    for (let i = arg; i >= 0; i--) {
      generatedItemsArr.push(<li key={i}>{i}</li>)
    }
    return generatedItemsArr
  }

  const [numToDisplay, setNumToDisplay] = useState(1)

  const [numToGenerate, setNumToGenerate] = useState(20000)

  const generateItems = useMemo(() => {
    return ImExpensiveToRun(numToGenerate)
  }, [numToGenerate])

  return (
    <div>
      <label htmlFor='memoized-number-to-display'>Number to display</label>
      <input
        id={'memoized-number-to-display'}
        onChange={(e) => {
          setNumToDisplay(parseInt(e.target.value))
        }}
        type='text'
        value={numToDisplay}
      />
      <label htmlFor='memoized-number-to-generate'>Number to Generate</label>
      <input
        id={'memoized-number-to-generate'}
        onChange={(e) => {
          setNumToGenerate(parseInt(e.target.value))
        }}
        type='text'
        value={numToGenerate}
      />
      <h2>{numToDisplay}</h2>
      <ul style={{ columns: 8, listStyle: 'none' }}>{generateItems}</ul>
    </div>
  )
}
