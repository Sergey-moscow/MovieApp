import styles from "./FilterButton.module.css"

export default function FilterButton({setIsModal}) {
  return (
     <button 
        className={styles.filterhBtn}
        onClick = {()=> setIsModal(true)}
    >
    <svg xmlns="http://www.w3.org/2000/svg"  className={styles.filterIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
                  
    </button>
  )
}
