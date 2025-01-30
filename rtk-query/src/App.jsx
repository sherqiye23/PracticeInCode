import { useState } from 'react'
import './App.css'
import { useDeleteSupplierMutation, useGetSuppliersQuery, usePostSupplierMutation, useUpdateSupplierMutation } from './redux/suppliersApi'

function App() {
  let { data, isLoading, refetch } = useGetSuppliersQuery()
  let [inp, setInp] = useState("")
  let [postSupplier] = usePostSupplierMutation()
  let [deleteSupplier] = useDeleteSupplierMutation()
  let [updateSupplier] = useUpdateSupplierMutation()

  let [editName, setEditName] = useState("")
  let [editid, setEditId] = useState("")
  let [display, setDisplay] = useState("none")

  async function handleSubmit(e) {
    e.preventDefault()
    let newSupplier = {
      companyName: inp.trim()
    }
    await postSupplier(newSupplier)
    refetch()
    setInp("")
  }

  async function handleDelete(id) {
    await deleteSupplier(id)
    refetch()
  }

  async function handleUpdate(id) {
    setDisplay("block")
    let find = data.find((item) => item.id == id)
    setEditName(find.companyName)
    setEditId(find.id)
  }

  async function handleEdit(e) {
    e.preventDefault();
    let editSupplier = {
      companyName: editName
    }
    await updateSupplier({id:editid, editSupplier})
    refetch()
    setDisplay("none")
  }



  return (
    <>
      {
        isLoading ? (
          <h1>...Loading</h1>
        ) : (
          <>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
              <button type='submit'>Add Supplier company name</button>
            </form>
            <ul>
              {
                data.map((element) => (
                  <li key={element.id}>{element.companyName} <button onClick={() => handleDelete(element.id)}>delete</button> <button onClick={() => handleUpdate(element.id)}>edit</button></li>
                ))
              }
            </ul>
            <form
              onSubmit={(e) => handleEdit(e)}
              style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: display, backgroundColor: "gray", padding: "50px" }}>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={{ display: "block", width: "100%", padding: "10px", margin: "5px 0" }} />
              <button type='submit'>Edit Supplier company name</button>
              {/* <button style={{ position: "absolute", top: 0, right: 0 }} onClick={() => setDisplay("none")}>X</button> */}
            </form>
          </>
        )
      }
    </>
  )
}

export default App
