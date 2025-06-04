import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //state variable - Super powerful variable
  const [listRes, setlistRes] = useState(resList);

  let listResJS = [
    {
      info: {
        id: "407661",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/5e5b7fa5-61b2-44e2-8612-5ee68fa97e1c_407661.jpg",
        locality: "New Market",
        areaName: "Esplanade",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "17K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-05-29 06:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "66% OFF",
          subHeader: "UPTO ₹126",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "2.1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-28169c3e-bc56-4640-93e1-88c67686d85a",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/burger-king-new-market-esplanade-rest407661",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "809673",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/dacb89f0-6673-42f6-bd4a-b34b38c0351d_809673.JPG",
        locality: "Gandhi Road",
        areaName: "Central Avenue",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "974",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-05-28 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-28169c3e-bc56-4640-93e1-88c67686d85a",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/dominos-pizza-gandhi-road-central-avenue-rest809673",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "395927",
        name: "NIC Ice Creams",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/bb9911d2-05c1-40c8-862e-44f132dc0b57_395927.JPG",
        locality: "ARABINDA SARANI",
        areaName: "Hatibagan",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.8,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.8",
        totalRatingsString: "6.1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-05-28 23:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹148",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-28169c3e-bc56-4640-93e1-88c67686d85a",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/nic-ice-creams-arabinda-sarani-hatibagan-rest395927",
        type: "WEBLINK",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-btn"
          onClick={() => {
            const FilterList = listRes.filter(
              (res) => res.info.avgRating > 4.4
            );
            setlistRes(FilterList);
            // listRes = listRes.filter((res) => res.info.avgRating > 4.7);
            // console.log(listRes);
          }}
        >
          {" "}
          Top rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listRes.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
