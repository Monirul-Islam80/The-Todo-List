import React, { useState } from 'react';
import todo from './image/checklist_117966.png'
export default function Todo() {
    const [input, setinput] = useState("");
    const [items, setitems] = useState([]);
    const [togglebtn, settogglebtn] = useState(true);
    const [itemId, setitemId] = useState(null);
    const additem = () => {
        if (!input) {

        } else if (input && !togglebtn) {
            setitems(
                items.map((val) => {
                    if (val.id === itemId) {
                        return { ...val, name: input }
                    }
                    return val;
                })
            )
                settogglebtn(true)
                setinput('')
                setitemId(null)
            

          
        } else {
            const allitame = { id: new Date().getTime().toString(), name: input }
            setitems([allitame, ...items])
            setinput("");

        }

    }


    const deletes = (index) => {
        const update = items.filter((val) => {
            return index !== val.id;

        });
        setitems(update);
    }
    const removeall = () => {
        setitems([]);
    }
    const edit = (id) => {

        let newEdite = items.find((val) => {
            return val.id === id;
        });
        settogglebtn(false);
        setinput(newEdite.name)
        setitemId(id)

    }
    return (
        <>
            <div className="main">
                <div className="child-main">
                    <div className="child">
                        <figure>
                            <img src={todo} alt="todo logo" />
                            <figcaption>Add your list here</figcaption>
                        </figure>
                    </div>
                    <div className="additem">
                        <div className="in">
                            <input type="text" placeholder=" ✍️ add items..."
                                value={input}
                                onChange={(e) => { setinput(e.target.value) }}
                            />
                            {
                                togglebtn ? <i className="fa fa-plus add-btn" title="Add Item" onClick={additem}></i> :
                                    <i className="fa fa-edit add-btn" title="Add Item" onClick={additem}></i>
                            }

                        </div>
                    </div>

                    <div className="additem main-items">
                        {items.map((val) => {
                            return (
                                <div className="items" key={val.id}>
                                    <h3>{val.name}</h3>
                                    <div>

                                        <i className="far fa-edit add-btn" title="Edit" onClick={() => { edit(val.id) }}></i>
                                        <i className="far fa-trash-alt add-btn" title="Delete" onClick={() => { deletes(val.id) }}></i>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="additem">

                        <button className="button" onClick={removeall}>
                            <span>Remove All</span>
                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}
