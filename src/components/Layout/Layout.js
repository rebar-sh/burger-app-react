import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
       {/* <div>ToolBar ,SideBar, Footer</div> */}
       <main className={styles.main}>
           {props.children}
       </main>
    </Aux>
)


export default layout;