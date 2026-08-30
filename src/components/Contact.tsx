import text from '../data/text.json'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import Loading from './parts/Loading'

function Contact () {
  const [formSuccess, setFormSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, handleErrorMsg] = useState({ text: '', show: false})
  const formData = [
    {
      "id": "name",
      "label": "Name",
      "type": "text"
    },
    {
      "id": "email",
      "label": "Email",
      "type": "email"
    }
  ]
  async function handleSubmit (e: React.SubmitEvent) {
    setLoading(true)
    e.preventDefault()
    const api = "https://splitforms.com/api/submit"
    const data = new FormData(e.target as HTMLFormElement)
  
    const res = await fetch(api, {
      method: 'POST',
      body: data
    })
  
    if (res.ok) {
      setFormSuccess(true)
    } else {
      handleErrorMsg({text: '', show: false})
      setTimeout(() => {
        handleErrorMsg({ text: '', show: false})
      }, 5000)
    }
    setLoading(false)
  }
  return (
    <>
    <div className="w-dvw md:p-15 pt-10 p-5">
      <h2 className="flex md:justify-center pb-5 font-poppins font-bold text-3xl text-center">
        {text.contact.title}
      </h2>
      {/* email? - is that secure? */}
      <div className="flex justify-center w-full">
        <div className="md:w-2/3 w-full md:p-10 clean-box-shadow border rounded-sm dark:border-accent">
          <form onSubmit={handleSubmit} method="POST" className="w-full">
            <div className="flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 gap-4 ">
              <Mail className="w-full mb-2" />
              <input type="hidden" name="access_key" value="eddd13d0e65e4cc7b26d8b145072928f"/>
              {formData.map((item, index) => (
                <label htmlFor={item.id} className="flex md:flex-row" key={index + item.id}>
                  <span className="font-poppins font-medium w-15">{item.label}</span>
                  <input className="w-full ml-2 border rounded-sm dark:border-accent clean-box-shadow" type={item.type}  name={item.id}  id={item.id} required/>
                </label>
              )) }
              <textarea className="border rounded-sm dark:border-accent clean-box-shadow p-2" name="message" placeholder="type message..." required></textarea>
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
              {/* on hover button */}
              { errorMsg.show && ( <p className="text-red-500 text-center">{errorMsg.text}</p>)}
              { formSuccess ? (
                <div className="flex flex-col">
                  <p className="font-poppins font-semibold text-green-300 text-center">
                    Message sent!
                  </p>
                  <p className="text-center text-sm">I'll be in touch soon</p>
                </div> 
              ) : (
              <div className="flex flex-row justify-center">
                <button type="submit" className="w-1/4 submit-btn pointer border rounded-sm p-1 clean-box-shadow bg-bg font-poppins font-semibold content-center">
                  { loading ? ( <div className="flex justify-center"><Loading /></div> ) : (
                    <span>Send</span>
                  ) }
                </button>
              </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center m-6 gap-4">
        <a href="https://github.com/ge-krebs" target="_blank">
          <img className="w-6 dark:invert" src="github-logo.png" alt="github logo" />
        </a>
        <a href="https://linkedin.com/in/gemmakrebs" target="_blank">
          <img className="w-6" src="linkedin.png" alt="linkedIn logo" />
        </a>
      </div>
    </div>
    </>
    )
}

export default Contact