import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CongratsPopup = (props) => {
    let date = props.value;
    let time = props.time;

    return (

        <Modal
            {...props}
            size="sm"
            style={{ "text-align": "center" }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div><img src="https://s3-alpha-sig.figma.com/img/d98d/c814/35e99b25a642bbb09bee945551a78d75?Expires=1627257600&Signature=KJuzovSZGX~A3axQGrCNhN3L3cHZJljxyIgovrQoC9QGTsUKmp1Me3qSBU9r8pu~BKje9prBdnYr7fd47YhhxisfTPXwxtvLS20Z-dmGZruUyMk9lV3GCmc-QcQtTJ8xdx2ZCIGFvAWpPyRVQFhKmKt13EfP25ri~yDT-ubM474fZlybDvXwTaDJ-37E6vjJb~qnsmQQg8ADF~NKzho-EkTmVXt67UuqAU~vusW8OxWkFE6ToHUd6FG0yU1RSH0w40e1aZm3elk7FZYfdS7jGiJVQ7HKV3jyxzTB9t49NTXKK7caGDbNat7Lghb9-Qko~96oejJKY3s2x1MTHEeLbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" style={{ width: "50px", margin: "3px" }} />
            </div>
            <div className="p-1 " style={{ color: " #6d55f1", fontSize: "15px", fontWeight: "bold" }}>Congratulation, Your Mock Interview is Booked Successfully!</div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }} >
                <div >Time : {time}</div>
                <div > On {date.toDateString()}</div>
            </div>
            <div className="p-3"  ><Button style={{ "minWidth": "180px" }} id="btn-practice" onClick={props.onHide}>Done</Button></div>
            <div className="p-3 " style={{ "fontSize": "10px" }} >*Privacy & Security Terms*</div>
        </Modal>

    )
}

export default CongratsPopup

