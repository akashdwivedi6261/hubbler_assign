import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import styles from "./style.module.css"

const LeftRules = () => {
   const{save, setSave, addRule, rule} = useContext(AuthContext)
  return (
    <div className={styles.leftBox}>
        <h4 style={{marginBottom: "2rem"}}>Back to stages</h4>
        <div className={styles.rules}>
            <div>Rules 2</div>
            {
            
            rule.map((ele) => <div><input placeholder='Fallback rule' readOnly={save}/></div>)
            }
            <div><button onClick={addRule}>Add new Rule</button></div>
        </div>
    </div>
  )
}

export default LeftRules