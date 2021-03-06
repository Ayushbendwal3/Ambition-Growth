import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const InvestmentPlan = () => {
  return (
    <div>
      <TitleComponent title="Investment Plan | Ambition Growth" />
      <Navbar />
      <Footer />
    </div>
  )
}

export default InvestmentPlan
