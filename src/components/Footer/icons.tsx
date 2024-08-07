import React from "react";
import Image from "next/image";
import InstagramIcon from "@/assets/icons/instagram.png";
import FacebookIcon from "@/assets/icons/facebook.png";
import TwitterIcon from "@/assets/icons/twitter.png";
import LinkedinIcon from "@/assets/icons/linkedin.png";
import YoutubeIcon from "@/assets/icons/youtube.png";
export default function page(){
    return<>
    <div className="flex justify-start space-x-4 mb-8">
          <p>Follow us</p>
          <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
          <Image src={FacebookIcon} alt="Instagram" width={24} height={24} />
          <Image src={TwitterIcon} alt="Instagram" width={24} height={24} />
          <Image src={LinkedinIcon} alt="Instagram" width={24} height={24} />
          <Image src={YoutubeIcon} alt="Instagram" width={24} height={24} />
        </div>
    </>
}