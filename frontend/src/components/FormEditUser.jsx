import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const FormEditUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [role, setRole] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        const getUserById = async ()=>{
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`);
                setName(response.data.name);
                setEmail(response.data.email);
                setRole(response.data.role);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        }
        getUserById();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role
            });
            navigate("/users")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
        <h1 className='title'> users </h1>
        <h1 className='subtitle'> Update user </h1>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="conten">
                <form onSubmit={updateUser}>
                <p className='has-text-centered'>{msg}</p>
                <div className="field">
                        <label className='label'>Name</label>
                        <div className="control">
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Name'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Email</label>
                        <div className="control">
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='input' placeholder='Email'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Password</label>
                        <div className="control">
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Confirm Password</label>
                        <div className="control">
                            <input type='password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} className='input' placeholder='Conf Password'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Role</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type='submit' className='button is-success'>Update</button>
                        </div>                        
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditUser