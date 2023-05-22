import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside className="col-3 s_tbdr">
          <ul className="nav flex-column">
            <li className="nav-item bg-primary mt-2 mb-1">
                <Link className="nav-link text-white active text-center" href="/student">Student (app router)</Link>
            </li>
            <li className="nav-item bg-primary mt-1 mb-1">
                <Link className="nav-link text-white text-center" href="/teacher">Teacher (app router)</Link>
            </li>
            <li className="nav-item bg-primary mt-1 mb-1">
                <Link className="nav-link text-white text-center" href="/principal">Principal (page router)</Link>
            </li>
            <li className="nav-item bg-primary mt-1 mb-1">
                <Link className="nav-link text-white text-center" href="/accountant">Accountant (page router)</Link>
            </li>
          </ul>
        </aside>
  )
}
