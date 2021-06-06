import React, { FC, useState } from "react"
import { useHistory } from "react-router-dom"

import { getClient } from "./client"

export const Generate: FC = () => {

  const client = getClient()

  const history = useHistory()
  const [phrases, setPhrases] = useState<Array<string>>([""])
  const [iterations, setIterations] = useState(100)
  const [count, setCount] = useState(1)
  const [label, setLabel] = useState("")

  function updatePhrase(phrase: string, index: number) {
    setPhrases([...phrases.slice(0, index), phrase, ...phrases.slice(index + 1)])
  }

  function deletePhrase(index: number) {
    setPhrases([...phrases.slice(0, index), ...phrases.slice(index + 1)])
  }

  function addPhrase() {
    setPhrases([...phrases, ""])
  }

  async function onGenerate() {
    // TODO: include parent, if one has been selected
    const job = await client.createJob({
      count, iterations, phrases, label
    })
    history.push(`/jobs/${job.data.id}`)
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Generate images</h1>
      <hr />
      <label>Job Label:</label>&nbsp;
      <input type="text" value={label} onChange={e => setLabel(e.target.value)} />
      <br /><br />
      <label>Phrases:</label><br />
      {phrases.map((phrase, i) => (
        <div style={{ marginBottom: "5px" }}>
          <input style={{ marginRight: "5px" }} type="text" key={`phrase_${i}`} value={phrase} onChange={e => updatePhrase(e.target.value, i)} />
          <button onClick={() => deletePhrase(i)} disabled={phrases.length === 1}>X</button>
        </div>
      ))}
      <button type="button" onClick={() => addPhrase()}>+ Add</button>
      <br /><br />
      <label>Iterations:</label>&nbsp;
      <input min={10} max={5000} style={{ width: "50px" }} type="number" value={iterations} onChange={e => setIterations(parseInt(e.target.value))} />
      <br /><br />
      <label>Count:</label>&nbsp;
      <input min={1} max={100} style={{ width: "50px" }} type="number" value={count} onChange={e => setCount(parseInt(e.target.value))} />
      <br /><br />
      <button onClick={() => onGenerate()}>Generate &gt;&gt;</button>
    </div>
  )
}