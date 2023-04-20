import React from "react";
import coupleImg from "../couple.jpg";

const CouplePackage = () => {
  return (
    <>
      <div className="container-fluid family position-relative d-flex align-items-center text-center flex-column    justify-content-center">
        <img className="familyImg" src={coupleImg} alt="couple" />
        <div className='familyHead position-absolute mt-4 top-0 start-50 translate-middle-x'>
            
          <h4 className='text-sm-center'>
            Welcome to our Couple Package Deals! Whether you're planning a
            romantic getaway or a special celebration, Our couple package deal help make
            your trip unforgettable.
          </h4>
        </div>
      </div>
      <div className="container my-5">
        <h5>Here are some of our current couple package deals:</h5>
        <br />
        <ol>
          <li>
            Romantic Beach Getaway: This package is perfect for couples who want
            to escape to a tropical paradise. It includes 5 days and 4 nights at
            a luxurious beachfront resort, a couples massage, romantic dinner on
            the beach, and a sunset sail. Starting from $2,500 for two.
          </li>
          <br />
          <li>
            Wine Country Retreat: For couples who love wine and relaxation, this
            package offers a chance to explore California's wine country. It
            includes a 3-day stay at a luxury bed and breakfast, a private wine
            tour, and a couples spa day. Starting from $1,800 for two.
          </li>
          <br />
          <li>
            City Romance Package: This package is perfect for couples who want
            to experience the excitement of a city. It includes 3 days and 2
            nights at a centrally located hotel, a romantic dinner at a
            top-rated restaurant, and a private city tour. Starting from $1,200
            for two.
          </li>
          <br />
          <li>
            Adventure Getaway: For couples who love the great outdoors, this
            package offers a chance to explore some of the country's most
            beautiful national parks. It includes a 7-day road trip, visiting
            Yellowstone, Grand Teton, and Glacier National Parks. The package
            includes accommodations, car rental, and park entry fees. Starting
            from $3,000 for two.
          </li>
        </ol>
        <br />
        <p>
          We also offer the option to customize any of our couple packages to
          better suit your needs. Whether you want to add additional nights,
          upgrade your accommodations, or modify the itinerary, we are happy to
          work with you to create the perfect couple's getaway.
        </p>
        <br />
        <p>
          Don't forget to check out our deals and promotions section for
          additional savings on our couple packages. And, if you have any
          questions or need help planning your couple's vacation, our customer
          service team is here to assist you.
        </p>
        <br />
        <strong>
          Book your couple package today and create unforgettable memories!
        </strong>
      </div>
    </>
  );
};

export default CouplePackage;
