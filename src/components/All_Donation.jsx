import { useContext } from "react"
import { AllDonation } from "../Root/Root"
import SingleDonation from "./SingleDonation"


export default function All_Donation() {

    const allDonation = useContext(AllDonation)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 my-24">
        {allDonation.map(donation => <SingleDonation key={donation.id} donation={donation} /> )}
    </div>
  )
}
