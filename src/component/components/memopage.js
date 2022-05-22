import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Popup from 'reactjs-popup';

function Memopage() {

    function memoHander() {
        // add memo to localStorage
        // e.preventDefault();
        // let data = new FormData(e.target);
        // let memo_content = data.get("memo");
        let memo_content = document.getElementById("memo_content").value;
        let memo = {
            id: Date.now(),
            title: memo_content,
            time: new Date().toLocaleString()
        }
        let memoList = JSON.parse(localStorage.getItem("memoList"));
        if (memoList === null) {
            memoList = [];
        }
        memoList.push(memo);
        localStorage.setItem("memoList", JSON.stringify(memoList));
    }

    // remove one memo from localStorage
    function removeMemo(id) {
        let memoList = JSON.parse(localStorage.getItem("memoList"));
        let newMemoList = memoList.filter(memo => memo.id !== id);
        localStorage.setItem("memoList", JSON.stringify(newMemoList));
        window.location.reload();
    }

    const [memo, setMemo] = useState([]);
    useEffect(() => {
        // fetch user data from local storage
        const memo = localStorage.getItem('memoList');
        if (memo) {
            setMemo(JSON.parse(memo));
        }
    }, []);

    return (
        <div class="memo-page-all">
            <div class="container">
                <div class="memo-page">
                    <div class="row">
                        {memo.map(memo => 
                            <div class="col-sm-4">
                                <div class="memo-card">
                                    <div class="card" id="memo">
                                        <div class="card-header" id="memo_header">
                                            Memo
                                            <button class="btn btn-danger btn-sm" id="memo_delete" value="Delete" onClick={() => removeMemo(memo.id)}><BsTrashFill /></button>
                                        </div>
                                        <div class="card-body" id="memo_body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{memo.title}</p>
                                            <footer class="blockquote-footer">{memo.time}</footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Popup trigger={<button class="btn btn-success btn-lg" id="add-btn"><BsPlusLg /></button>} modal>
                        {close => (
                            <div class="memo-modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div class="header">
                                    <h2>Create a memo</h2>
                                </div>
                                <div class="content">
                                    <form onSubmit={memoHander} className="memo-form">
                                        <br></br>
                                        <textarea id="memo_content" name="memo" placeholder="Write down your memo." required></textarea>
                                        <div class="d-grid gap-2 col-4 mx-auto">
                                            <button class="btn btn-primary" id="btn-rate" type="submit">Stick it</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </Popup>
                    {/* <button class="btn btn-success btn-lg" id="add-btn"><BsPlusLg /></button> */}
                </div>
            </div>
        </div>
    );
}

export default Memopage;