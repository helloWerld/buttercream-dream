import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-100 overflow-x-clip">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-12 lg:gap-0 position:relative display:block">
          <div className="flex flex-col w-full lg:w-1/2">
            <h1 className="text-5xl font-bold text-accent">
              Baked to Perfection
            </h1>
            <h2 className="text-2xl font-extra-bold mt-2 text-primary">
              Deliciously Crafted for Every Celebration
            </h2>
            <p className="font-light text-primary mt-4 mb-6">
              At{" "}
              <span className="font-bold text-secondary">
                I Dream of Buttercream
              </span>
              , we believe every celebration deserves a cake as unique as the
              occasion. Our handcrafted creations blend the finest ingredients
              with artistic flair, ensuring that every bite is a sweet escape
              into a world of flavor and joy.
              <br />
              <br /> "Join us in our passion for baking, where tradition meets
              innovation, and every cake tells a story. Discover the perfect
              centerpiece for your next celebration and let your taste buds
              dream a little sweeter."
            </p>
            <div className="flex flex-row items-center gap-3">
              <Link href="/cakes" className="btn btn-accent text-base-100">
                <FaBirthdayCake className="text-xl" />
                Cakes
              </Link>
              <Link href="/contact" className="btn btn-accent text-base-100">
                <IoIosPhonePortrait className="text-xl" />
                Contact
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center pb-6">
            <Image
              className="mask mask-squircle rounded-lg shadow-2xl hover:animate-pulse"
              src="/assets/images/brand_logo_512x512.jpg"
              alt="Business Logo & Contact"
              width={512}
              height={512}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
