import React from 'react'
import styles from '@/styles/components/GridHelper.module.scss'

export default function GridHelper({columns, rows, gapY, gapX, onlyLines, hide}) {

  const printCells = (cels) => {
    let items = []
    
    for (let i = 0; i < cels; i++) {
      items.push(<div key={i} className={styles.grid_cell}></div>)
    }

    return items
  }

  return (
    <div className={`${styles.grid_container} ${onlyLines && styles.onlylines} ${hide && styles.hide}`} style={{'--gapY': gapY+'px', '--gapX' : gapX+'px'}}>
        <div className={styles.grid_columns}>
          {printCells(columns)}
        </div>
        <div className={styles.grid_rows}>
          {printCells(rows)}
        </div>
    </div> 
  )
}
