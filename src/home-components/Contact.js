import "../css/Contact.css";
const Contact = () => {
    return (
        <div className="contact_main">
            <h1>
                Discuss it with me
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    placeholder="Message"
                />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default Contact;