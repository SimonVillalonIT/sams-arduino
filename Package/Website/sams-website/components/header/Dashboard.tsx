import React from 'react'
import { headersData } from "@/data/Header.data";

function Dashboard() {
  return (
    <div className={`hidden md:flex`}>
        <a href="">{headersData.dashboard.register}</a>
        <button className="p-2 bg-secondary rounded-full text-white">
          {headersData.dashboard.dashboard}
        </button>
      </div>
  )
}

export default Dashboard

