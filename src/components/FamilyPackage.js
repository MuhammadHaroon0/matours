import React from "react";
import familyImg from "../family.jpg";

const FamilyPackage = () => {
  return (
    <>
      <div className="container-fluid family position-relative d-flex align-items-center text-center flex-column justify-content-center">
        <img className="familyImg " src={familyImg} alt="" />
        <div className="familyHead position-absolute mt-4 top-0 start-50 translate-middle-x">
          <h4 className="text-sm-center">
            Welcome to our family package deals! We understand that planning a
            family vacation can be overwhelming, so we've put together a variety
            of packages to help make the process easier.
          </h4>
        </div>
        <br />
      </div>
      <div className="mb-5 container">
        <h5>
          <br />
          Here are some of our current family package deals:
        </h5>
        <br />
        <ol className="flex-column">
          <li>
            Beach Vacation Package: This package is perfect for families who
            want to soak up the sun and enjoy some beach time. It includes 5
            days and 4 nights at a beachfront resort, daily breakfast for the
            family, and access to a variety of water sports activities. Starting
            from $1,500 for a family of four.
          </li>
          <br />

          <li>
            National Park Adventure Package: For families who love the great
            outdoors, this package offers the opportunity to explore some of the
            country's most beautiful national parks. It includes a 7-day road
            trip, visiting Yellowstone, Grand Teton, and Glacier National Parks.
            The package includes accommodations, car rental, and park entry
            fees. Starting from $2,500 for a family of four.
          </li>
          <br />
          <li>
            Disney World Vacation Package: This package is perfect for families
            who want to experience the magic of Disney. It includes 4 days and 3
            nights at a Disney resort, park tickets, and access to FastPass+
            reservations. Starting from $2,000 for a family of four.
          </li>
          <br />
          <li>
            Ski Resort Package: For families who love winter sports, this
            package offers a chance to hit the slopes. It includes 4 days and 3
            nights at a ski resort, lift tickets, equipment rental, and ski
            lessons for beginners. Starting from $2,500 for a family of four.
          </li>
          <br />
          <li>
            City Exploration Package: For families who want to experience the
            excitement of a city, this package offers a chance to explore some
            of the country's most vibrant cities. It includes 5 days and 4
            nights in a centrally located hotel, daily breakfast for the family,
            and access to a variety of city tours and activities. Starting from
            $2,000 for a family of four.
          </li>
        </ol>
        <br />
        <p>
          We also offer the option to customize any of our family packages to
          better suit your needs. Whether you want to add additional nights,
          upgrade your accommodations, or modify the itinerary, we are happy to
          work with you to create the perfect family <br />
          <br />
          Don't forget to check out our deals and promotions section for
          additional savings on our family packages. And, if you have any
          questions or need help planning your family vacation, our customer
          service team is here to assist you.
        </p>

        <br />
        <strong>
          {" "}
          Book your family package today and create memories that will last a
          lifetime!
        </strong>
      </div>
    </>
  );
};

export default FamilyPackage;
