import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from './action/action';
function Pages() {
    const data = useSelector(state => state.crud.user)
    console.log(data);
    const [input, setinput] = useState("")
    const [title, settitle] = useState("")
    const id = Math.floor(Math.random() * 100)
    const dispatch = useDispatch()


    const submit = () => {
        let obj = { input, title, id }
        dispatch(adduser(obj))
        setinput("")
        settitle("")
    }

    const remove = (id) => {
        dispatch(removeuser(id))
    }

    return (
        <div>
            <header style={{ background: "black", padding: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img style={{ height: "48px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=" alt="" />
                    <p style={{ color: "white", fontSize: "25px" }}>Google Keep</p>
                </div>
            </header>
            <div style={{ justifyContent: "center", display: "flex", paddingTop: "20px" }}>
                <div>
                    <form action="" style={{ display: "grid", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "400px", overflow: "hidden" }}>
                        <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder='Title' autoComplete='off' style={{ border: "none", fontWeight: "600", outline: "none", height: "30px", padding: "10px", width: "300px" }} />
                        <textarea value={title} onChange={(e) => settitle(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Write a note' style={{ border: "none", fontWeight: "600", outline: "none", padding: "20px 5px 20px 5px", height: "10vh", fontSize: "16px" }}></textarea>
                        <button onClick={submit} type='button' style={{ cursor: "pointer", height: "30px", border: "none", color: "#2c2c16", fontWeight: "800", }}>
                            <FaPlus style={{ fontSize: "20px" }} />
                        </button>
                    </form>
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    data.map((val, i) =>
                        <div style={{ paddingTop: "20px" }}>
                            <div>
                                <form action="" style={{ display: "grid", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "400px", overflow: "hidden", margin: "10px" }}>
                                    <h3 style={{ textAlign: "center", borderBottom: "1px solid black", paddingBottom: "10px" }}>{i + 1}</h3>
                                    <p style={{ textAlign: "center" }}><strong>Title :- </strong> {val.title}</p>
                                    <p style={{ textAlign: "center" }}><strong>Note :- </strong> {val.input}</p>
                                    <button type='button' onClick={() => remove(val.id)} style={{ height: "30px", border: "none", color: "#2c2c16", fontWeight: "800", cursor: "pointer" }}>
                                        <MdDelete style={{ fontSize: "25px", color: "red" }} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="footer" style={{ background: "black", position: "fixed", right: "0", left: "0", bottom: "0", marginBottom: "10px" }}>
                <p style={{ textAlign: "center", color: "white", fontWeight: "600", letterSpacing: "1.2" }}>Copyrights 2024</p>
            </div>
        </div>
    )
}
export default Pages