import React from 'react'
import './member.scss'

export default function member({ courseName, brief, link }) {
    return (
        <div class="container">
  <div class="card">
    
    <div class="contentBx">
      <h2>{courseName}</h2>
      <div class="size">
      <h2 style={{fontSize:"1vw"}}>{brief}</h2>
      </div>
      <a href={link}>brrrr</a>
    </div>
  </div>
</div>
    )
}
