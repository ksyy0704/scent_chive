import React, {useState} from 'react'


function LoginPage(){
    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value)
    }

    const onPasswordHandler = (event)=>{
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();

        const body={
            id: ID,
            password: Password
        }
    }

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>ID</label>
                <input type="text" value={ID} onChange={onIDHandler} pattern="^([a-z0-9_]){4,20}$"></input>
                <label>비밀번호</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <button type="submit">
                    로그인
                </button>
            </form>
        </div>
    )
}
export default LoginPage