import { CONTACT } from "../constants"


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter " >
            <p className="my-4"><a href="https://g.co/kgs/CbPKEUZ" className="border-b" >{CONTACT.address}</a></p>
            <p className="my-4"><a href="tel:+917024343213" className="border-b">
              {CONTACT.phoneNo}
            </a></p>
            
            
            <a href="mailto:atharvx09@gmail.com" className="border-b ">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact