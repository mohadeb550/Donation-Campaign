import { AllDonation } from "../Root/Root"
import { useContext, useEffect, useState } from "react"

export default function Donation() {

  const allDonation = useContext(AllDonation)
  const [ donationItems , setDonationItems ] = useState([]);

  useEffect(()=>{
    const prevDonationIds = JSON.parse(localStorage)
    setDonationItems(allDonation.filter(donation => ))
  })

  return (

    <div>

    </div>
  )
}
