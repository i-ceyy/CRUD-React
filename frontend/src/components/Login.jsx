import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
     <section className="hero has-background-grey-light is-fullheight is-fullwidth">
       <div className="hero-body">
         <div className="container">
           <div className="columns is-centered">
            <div className="column is-4">
                <form className='box'>
                    <h1 className='title is-2'>Sign In</h1>
                    <div className="field">
                        <label className='label'>Email</label>
                        <div className="control has-icons-left">
                            <input type='text' className='input' placeholder='Email'></input>
                            <span class="icon is-small is-left">
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Password</label>
                        <div className="control has-icons-left">
                            <input type='password' className='input' placeholder='Password'></input>
                            <span class="icon is-small is-left">
                                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <button className='button is-success is-fullwidth'>Login</button>
                    </div>
                </form>
            </div>
           </div>
         </div>
       </div>
     </section>
  )
}

export default Login