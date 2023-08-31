import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <div style={{padding: "0px",}}>
        <nav aria-label="...">
            <ul className="pagination pagination-md justify-content-center">
                <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                </li>
                <li className="page-item " ><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">....</Link></li>
                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination
