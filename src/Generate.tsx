import React, { FC, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import qs from "qs"

import { getClient } from "./client"
import * as mcache from "./mcache"
import { Image } from "./generated-client"

export const Generate: FC = () => {

  const client = getClient()

  const history = useHistory()
  const [phrases, setPhrases] = useState<Array<string>>([""])
  const [inversePhrases, setInversePhrases] = useState<Array<string>>([""])
  const [iterations, setIterations] = useState(100)
  const [count, setCount] = useState(1)
  const [label, setLabel] = useState("")
  const [parent, setParent] = useState<string | undefined>(undefined)
  const [lr, setLr] = useState(0.06)
  const [target, setTarget] = useState<string | undefined>(undefined)
  const [resetOptimizer, setResetOptimizer] = useState(true)

  const searchParams = qs.parse(window.location.search.substring(1)) as any

  function updatePhrase(phrase: string, index: number) {
    setPhrases([...phrases.slice(0, index), phrase, ...phrases.slice(index + 1)])
  }

  function deletePhrase(index: number) {
    setPhrases([...phrases.slice(0, index), ...phrases.slice(index + 1)])
  }

  function addPhrase() {
    setPhrases([...phrases, ""])
  }

  function updateInversePhrase(phrase: string, index: number) {
    setInversePhrases([...inversePhrases.slice(0, index), phrase, ...inversePhrases.slice(index + 1)])
  }

  function deleteInversePhrase(index: number) {
    setInversePhrases([...inversePhrases.slice(0, index), ...inversePhrases.slice(index + 1)])
  }

  function addInversePhrase() {
    setInversePhrases([...inversePhrases, ""])
  }


  async function onGenerate() {
    console.log("phrases", phrases)
    // filter phrases by empty
    let filteredPhrases = phrases.filter(phrase => phrase.length > 0)
    let filteredInversePhrases = inversePhrases.filter(phrase => phrase.length > 0)
    const job = await client.createJob({
      count, iterations, phrases: filteredPhrases, inverse_phrases: filteredInversePhrases, label, parent
    })
    // if target is populated, set job target
    if (target) {
      // split target into _, base64
      const [_, base64] = target.split(",")
      await client.setJobTarget(job.data.id as string, { image: base64 })
    }
    history.push(`/jobs/${job.data.id}`)
  }

  async function updateParent(parentId: string) {
    setParent(parentId)
    // try to load from cache
    const cachedParent: Image | null = mcache.get("results/" + parentId)
    if (cachedParent) {
      setPhrases(cachedParent.phrases as Array<string>)
      setInversePhrases(cachedParent.inverse_phrases as Array<string>)
      return
    }
    const parentResp = await client.getImage(parentId)
    setPhrases(parentResp.data.phrases as Array<string>)
    setInversePhrases(parentResp.data.inverse_phrases as Array<string>)
  }

  // load target from file using the FileReader api
  function loadTarget(f: File | null) {
    // if f is null return
    if (!f) {
      return
    }
    // ensure file is a jpeg image
    if (f.type !== "image/jpeg") {
      alert("Please select a jpeg image.")
      return
    }
    // read as base64
    const reader = new FileReader()
    reader.onload = e => {
      const dataUrl = e?.target?.result as string
      setTarget(dataUrl)
    }
    reader.readAsDataURL(f)

  }

  useEffect(() => {
    if (searchParams.parent) {
      updateParent(searchParams.parent)
    }
  }, [searchParams.parent])

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
      <label>Inverse Phrases:</label><br/>
      {inversePhrases.map((phrase, i) => (
        <div style={{ marginBottom: "5px" }}>
          <input style={{ marginRight: "5px" }} type="text" key={`inverse_phrase_${i}`} value={phrase} onChange={e => updateInversePhrase(e.target.value, i)} />
          <button onClick={() => deleteInversePhrase(i)} disabled={inversePhrases.length === 1}>X</button>
        </div>
      ))}
      <button type="button" onClick={() => addInversePhrase()}>+ Add</button>
      <br /><br />
      <label>Iterations:</label>&nbsp;
      <input min={10} max={5000} style={{ width: "50px" }} type="number" value={iterations} onChange={e => setIterations(parseInt(e.target.value))} />
      <br /><br />
      <label>Count:</label>&nbsp;
      <input min={1} max={100} style={{ width: "50px" }} type="number" value={count} onChange={e => setCount(parseInt(e.target.value))} />
      <br /><br />
      <input min={0.01} max={0.2} step={0.01} style={{ width: "50px" }} type="number" value={lr} onChange={e => setLr(parseFloat(e.target.value))} />
      <br /><br />
      {/* reset optimizer checkbox */}
      <label>Reset Optimizer:</label>&nbsp;
      <input type="checkbox" checked={resetOptimizer} onChange={e => setResetOptimizer(e.target.checked)} />
      <br /><br />
      <label>Target:</label>&nbsp;
      <input type="file" onChange={e => loadTarget(e.target.files && e.target.files[0])} />
      <br /><br />
      {/* If target is populated, display an image with "target" as a data url */}
      {target && <img src={target} />}
      <br /><br />
      <label>Parent:</label>&nbsp;{parent || ""}
      <br /><br />
      <button onClick={() => onGenerate()}>Generate &gt;&gt;</button>
    </div>
  )
}