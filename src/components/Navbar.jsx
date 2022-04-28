import React, { useContext } from 'react'
import styles from "./style.module.css"
import rightArrow from "../icons/right-arrow-angle.png"
import { AuthContext } from '../Contexts/AuthContextProvider'

const Navbar = () => {
 const {save, setSave}  = useContext(AuthContext)
  return (
    <div className={styles.navTop}>
      <div className={styles.leftFeature}>
        <div>
          <h4 style={{ marginBottom: "0px" }}>Demo custom App</h4>
          <div>App name</div>
        </div>
        <div><img src={rightArrow} alt="pic" /></div>
        <div>
          <h4 style={{ marginBottom: "0px" }}>Demo custom App</h4>
          <div>App name</div>
        </div>
        <div><img src={rightArrow} alt="pic" /></div>
        <div>
          <h4 style={{ marginBottom: "0px" }}>Demo custom App</h4>
          <div>App name</div>
        </div>
        <div><img src={rightArrow} alt="pic" /></div>

      </div>
      <div className={styles.rightFeature}>
        <div>
          <button onClick={() => setSave(!save)}>{save?"Edit": "Done"}</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar