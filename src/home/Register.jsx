import React from 'react'
const subTitle = "save the Day";
const Title = (
    <h2 className='title'>join on Day Long free Workshop for <b>Advances <span>Mastering</span> </b> on Sales  </h2>
)
const desc = "Limited Time Offer! Hurry UP";

function Register() {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                            <span className='subtitle'>{subTitle}</span>
                            {Title}
                            <p>{desc} </p>
                    </div>
                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-form'>
                        <input type='text' name='name' placeholder='Username' className='reg-input'/>
                        <input type='email' name='email' placeholder='Email' className='reg-input'/>
                        <input type='number' name='number' placeholder='Phone' className='reg-input'/>
                        <button type='submit' className='lab-btn'>Register Now</button>

                        </form>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Register