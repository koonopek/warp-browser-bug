import { useContext } from "react"
import { Context } from "../hooks/context"
import { brokenId, workingId } from "../lib/test-warp-contract";


export default function Home() {

  const api = useContext(Context);

  const brokenContract = async () => {
    await api.badContract.readState();
  }

  const workingContract = async () => {
    await api.workingContract.readState();
  }

  const clearCache = async () => {
    await (window.indexedDB.databases().then((r) => {
      for (var i = 0; i < r.length; i++) window.indexedDB.deleteDatabase(r[i].name);
    }).then(() => {
      document.location.reload()
      alert('All data cleared.');
    }))
  }

  return (
    <div>
      <div>
        <h1>Broken contract - database not open: (contains many "corrupted" interactions) {brokenId}</h1>
        <button className="bg-red-700 text-white font-bold py-2 px-4" onClick={brokenContract}>Read state</button>
      </div>
      <br />
      <div>
        <h1>Working contract: (contains 0 "corrupted" interactions) {workingId}</h1>
        <button className="bg-green-700 text-white font-bold py-2 px-4" onClick={workingContract}>Read state</button>
      </div>
      <br />
      <div>
        <button className="bg-yellow-700 text-white font-bold py-2 px-4" onClick={clearCache}>Clear cache</button>
      </div>
    </div>
  )
}
