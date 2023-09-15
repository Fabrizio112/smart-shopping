import { useState } from "react";


function ContactSection() {
    const initialForm = {
        name: "",
        surname: "",
        phone: "",
        email: "",
        message: ""
    }
    const [form, setForm] = useState(initialForm)
    const [modal, setModal] = useState(false)

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleModal = (e) => {
        e.preventDefault()
        if (form.name.length > 0 && form.surname.length > 0 && form.phone.length > 0 && form.email.length > 0 && form.message.length > 0) {
            setModal(true)
            setTimeout(() => {
                setForm(initialForm)
                setModal(false)
            }, 3000)
        }
    }
    return (
        <>
            <section className="modal-form" style={{ display: `${modal == true ? "flex" : "none"}` }}>
                <p>✅ Form sended with Sucess</p>
            </section>

            <section className="contact">
                <h1>Contact with us</h1>
                <hr />
                <form>
                    <input type="text" name="name" placeholder="Name..." value={form.name} onChange={handleForm} />
                    <input type="text" name="surname" placeholder="Surname..." value={form.surname} onChange={handleForm} />
                    <input type="number" name="phone" placeholder="Phone..." value={form.phone} onChange={handleForm} />
                    <input type="email" name="email" placeholder="Email..." value={form.email} onChange={handleForm} />
                    <textarea name="message" placeholder="Message..." minLength="10" maxLength="300" value={form.message} onChange={handleForm}></textarea>
                    <button onClick={handleModal}>Send</button>
                </form>
            </section>
        </>);
}

export default ContactSection;