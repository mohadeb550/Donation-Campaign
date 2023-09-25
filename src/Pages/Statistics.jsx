import { useEffect, useState, useContext } from "react";
import { AllDonation } from "../Root/Root";
import Chart from "../components/PieChart";

export default function Statistics() {

  const allDonation = useContext(AllDonation);

  const [ totalDonation ,setTotalDonation ] = useState(0);
  const [ yourDonation ,setYourDonation ] = useState(0);

  useEffect(()=>{

    setTotalDonation(allDonation.reduce((preValue, currentValue)=> preValue + currentValue.price ,0 ))

    const storedDonationIds = JSON.parse(localStorage.getItem('donationIds'));
    if(storedDonationIds){
     const foundDonation = allDonation.filter(donation => storedDonationIds.includes(donation.id));
     setYourDonation(foundDonation.reduce((preValue, currentValue)=> preValue + currentValue.price ,0 ))
    }

  },[])

  return (
    <>
      <Chart totalDonation={totalDonation} yourDonation={yourDonation} />
    </>
  )
}
