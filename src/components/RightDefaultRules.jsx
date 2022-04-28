import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import styles from "./style.module.css"

const RightDefaultRules = () => {
   const {save, setSave} =  useContext(AuthContext)
  return (
    <div className={styles.rightBox}>
        <h4>Default Rule</h4>
        <div>
            <div>Button name</div>
            <input placeholder='create po' readOnly={save}/>
        </div>
        <div>
            <select readOnly={save}>
                <option>If all</option>
                <option>If all</option>
                <option>If all</option>
                <option>If all</option>
            </select>
        </div>
        <div className={styles.inputs}>
            <input type="text" placeholder='Text' readOnly={save}/>
            <input type="text" placeholder='Contains' readOnly={save}/>
            <input type="text" placeholder='Urgent' readOnly={save}/>
            <input type="text" placeholder='Type top search and add' style={{width: "400px"}} readOnly={save}/>
            <button style={{display: "block", margin: "1rem 0.6rem"}}  >Add new Condition</button>
        </div>
       <div >
       <div>Perform then following action</div>
        <input placeholder='Start new app' style={{width: "150px", marginTop: "0.5rem"}} readOnly={save}/>
        <button style={{display: "block", margin: "1rem 0rem"}} readOnly={save}>Add new Action</button>

       </div>
    </div>
  )
}

export default RightDefaultRules