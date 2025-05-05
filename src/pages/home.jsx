"use client"

import { useState, useRef } from "react"
import PostCard from "../components/postCard"
import PostDetail from "../components/postDetail"
import { ChevronDown } from "lucide-react"

// Import all the images from the blog component
import coverImg1 from "../assets/cover-day1.jpg"
import coverImg2 from "../assets/cover-day2.jpg"
import coverImg3 from "../assets/cover-day3.jpg"
import coverImg4 from "../assets/cover-day4.jpg"
import coverImg5 from "../assets/cover-day5.jpg"
import coverImg6 from "../assets/cover-day6.jpg"
import coverImg7 from "../assets/cover-day7.jpg"
import coverImg8 from "../assets/covver-day8.jpg"

// Import all day1 images
import day1Img1 from "../assets/rizal.jpg"
import day1Img9 from "../assets/rizal1.jpg"
import day1Img10 from "../assets/rizal2.jpg"
import day1Img11 from "../assets/rizal3.jpg"
import day1Img2 from "../assets/flag.jpg"
import day1Img3 from "../assets/reducto.jpg"
import day1Img4 from "../assets/fort.jpg"
import day1Img012 from "../assets/fort1.jpg"
import day1Img013 from "../assets/fort2.jpg"
import day1Img014 from "../assets/fort3.jpg"
import day1Img5 from "../assets/moa.jpg"
import day1Img6 from "../assets/moa1.jpg"
import day1Img7 from "../assets/moa2.jpg"
import day1Img8 from "../assets/moa3.jpg"
import day1Img15 from "../assets/moa4.jpg"

// Import all day2 images
import day2Img1 from "../assets/subicport.jpg"
import day2Img2 from "../assets/subicport1.jpg"
import day2Img13 from "../assets/subicport2.jpg"
import day2Img14 from "../assets/subicport3.jpg"
import day2Img15 from "../assets/subicport4.jpg"
import day2Img3 from "../assets/lawenforcement.jpg"
import day2Img4 from "../assets/lawenforcement1.jpg"
import day2Img16 from "../assets/lawenforcement2.jpg"
import day2Img17 from "../assets/lawenforcement3.jpg"
import day2Img18 from "../assets/lawenforcement4.jpg"
import day2Img5 from "../assets/sbecc.jpg"
import day2Img6 from "../assets/sbecc1.jpg"
import day2Img10 from "../assets/sbecc3.jpg"
import day2Img11 from "../assets/sbecc4.jpg"
import day2Img12 from "../assets/sbecc5.jpg"
import day2Img7 from "../assets/subic.jpg"
import day2Img8 from "../assets/dutyfree.jpg"
import day2Img9 from "../assets/dutyfree1.jpg"
import day2Img01 from "../assets/dutyfree2.jpg"
import day2Img02 from "../assets/subic1.jpg"
import day2Img03 from "../assets/subic2.jpg"

// Import all day3 images
import day3Img1 from "../assets/museum.jpg"
import day3Img2 from "../assets/museum1.jpg"
import day3Img12 from "../assets/museum2.jpg"
import day3Img3 from "../assets/qcmemorial.jpg"
import day3Img4 from "../assets/qcmemorial1.jpg"
import day3Img5 from "../assets/lolong.jpg"
import day3Img6 from "../assets/carmuseum.jpg"
import day3Img7 from "../assets/carmuseum1.jpg"
import day3Img13 from "../assets/carmuseum2.jpg"
import day3Img14 from "../assets/carmuseum3.jpg"
import day3Img15 from "../assets/carmuseum4.jpg"
import day3Img8 from "../assets/museumNat.jpg"
import day3Img9 from "../assets/mqroom.jpg"
import day3Img10 from "../assets/mqroom1.jpg"
import day3Img11 from "../assets/mqroom2.jpg"

// Import all day4 images
import day4Img1 from "../assets/hytec.jpg"
import day4Img2 from "../assets/hytec1.jpg"
import day4Img4 from "../assets/hytec2.jpg"
import day4Img5 from "../assets/hytec3.jpg"
import day4Img6 from "../assets/hytec4.jpg"
import day4Img3 from "../assets/bsp.jpg"
import day4Img7 from "../assets/bsp1.jpg"
import day4Img8 from "../assets/bsp2.jpg"
import day4Img9 from "../assets/bsp3.jpg"
import day4Img10 from "../assets/bsp4.jpg"


// Import all day5 images
import day5Img1 from "../assets/lrt1.jpg"
import day5Img2 from "../assets/lrt2.jpg"
import day5Img3 from "../assets/lrt3.jpg"
import day5Img4 from "../assets/lrt4.jpg"
import day5Img5 from "../assets/mmda.jpg"
import day5Img6 from "../assets/cover-day5-1.jpg"
import day5Img7 from "../assets/lrt.jpg"
import day5Img8 from "../assets/lrt-1.jpg"
import day5Img9 from "../assets/lrt-2.jpg"
import day5Img10 from "../assets/lrt-3.jpg"
import day5Img11 from "../assets/lrt5.jpg"
import day5Img12 from "../assets/lrt6.jpg"
import day5Img13 from "../assets/mmda2.jpg"
import day5Img14 from "../assets/mmda3.jpg"
import day5Img15 from "../assets/mmda1.jpg"

// Import all day6 images
import day6Img1 from "../assets/farm.jpg"
import day6Img2 from "../assets/farm1.jpg"
import day6Img3 from "../assets/sbf.jpg"
import day6Img4 from "../assets/sbf1.jpg"
import day6Img5 from "../assets/bell.jpg"
import day6Img6 from "../assets/bell1.jpg"
import day6Img7 from "../assets/bell2.jpg"
import day6Img8 from "../assets/bell3.jpg"
import day6Img9 from "../assets/bell4.jpg"
import day6Img10 from "../assets/PMA.jpg"
import day6Img11 from "../assets/pma1.jpg"
import day6Img12 from "../assets/pma2.jpg"
import day6Img13 from "../assets/pma3.jpg"
import day6Img14 from "../assets/pma4.jpg"
import day6Img15 from "../assets/mansion1.jpg"
import day6Img16 from "../assets/mansion.jpg"
import day6Img17 from "../assets/mansion2.jpg"
import day6Img18 from "../assets/mansion3.jpg"
import day6Img19 from "../assets/mansion4.jpg"
import day6Img20 from "../assets/mine.jpg"
import day6Img21 from "../assets/mine1.jpg"
import day6Img22 from "../assets/mine2.jpg"
import day6Img23 from "../assets/mine3.jpg"
import day6Img24 from "../assets/mine4.jpg"
import day6Img25 from "../assets/mine5.jpg"
import day6Img26 from "../assets/night.jpg"
import day6Img27 from "../assets/night1.jpg"
import day6Img28 from "../assets/night2.jpg"
import day6Img29 from "../assets/sbf2.jpg"
import day6Img30 from "../assets/night4.jpg"
import day6Img31 from "../assets/night3.jpg"

// Import all day7 images
import day7Img1 from "../assets/stroll.jpg"
import day7Img2 from "../assets/stroll1.jpg"
import day7Img3 from "../assets/stroll2.jpg"
import day7Img4 from "../assets/stroll3.jpg"
import day7Img5 from "../assets/stroll4.jpg"

// Import all day8 images
import day8Img1 from "../assets/back4.jpg"
import day8Img2 from "../assets/back.jpg"
import day8Img3 from "../assets/back2.jpg"
import day8Img4 from "../assets/back3.jpg"
import day8Img5 from "../assets/back1.jpg"

function Home() {
  const [selectedPost, setSelectedPost] = useState(null)
  const postsRef = useRef(null)

  // Declaration of variables to fix the errors
  const Isn = null
  const ll = null
  const never = null
  const forget = null
  const and = null

  const posts = [
    {
      id: 1,
      title: "Day 1 - Manila Tour",
      date: "2025-04-07",
      description: "A Day of Discovery: From Quezon City to Intramuros and MOA",
      fullContent:
        "Today started bright and early as we made our way to the airport, excitement buzzing in the air. After a smooth arrival, we recharged with a restful break and a hearty lunch at DJM, fueling up for the adventures ahead. Our city tour kicked off with an introduction to Quezon City, affectionately known as the 'City of Stars.' Our guide, Kuya Enan shared that it's the largest city in Metro Manila, both in terms of land area and population. It's also considered the constitutional city, having once been the capital of the Philippines and home to key government institutions.",
      image: coverImg1,
      dayImages: [
        {
          images: [day1Img1, day1Img2, day1Img9,day1Img10, day1Img11],
          sectionTitle: "Rizal Park",
          sectionText:
            "Next, we visited the historic Rizal Park, a meaningful landmark where the memory of national hero Dr. José Rizal is honored. Walking through the serene grounds gave us a deep sense of pride and reverence. The iconic Rizal Monument, stood tall as a symbol of Filipino bravery and sacrifice. At the top of the obelisk, three gold stars shimmer proudly—each representing Luzon, Visayas, and Mindanao—signifying national unity across the Philippine archipelago. This stunning shot of the Philippine flag glowing against the sun and dramatic clouds perfectly symbolizes the spirit of nationalism. It reflects the sacrifices made by heroes like Rizal and the continued pride Filipinos hold in their heritage.",
        },
        {
          images: [day1Img3, day1Img4, day1Img012, day1Img013,day1Img014 ],
          sectionTitle: " Reducto de San Francisco Javier & Fort Santiago: Echoes of the Past Within Intramuros",
          sectionText:
            "Next, we made our way to the iconic Fort Santiago and the Reducto de San Francisco Javier. Set within the walled city of Intramuros, this fortress has stood since 1570 and holds deep historical significance as a defense stronghold during the Spanish colonial era. As we explored the cobblestone paths, aged stone walls, and arched gates, we felt transported to a different era—one where the echoes of history still linger in every corner. The Reducto de San Francisco Javier, a circular bastion near the entrance, once served as a final line of defense, its cannon slits and stone form speaking to centuries of strategic warfare. Meanwhile, the main gate of Fort Santiago, adorned with intricate Spanish carvings and the national coat of arms, stood both majestic and solemn. Walking through it felt like stepping into a chapter of history. Inside, we found preserved ruins, Rizal's prison cell, and tranquil gardens—a solemn space for reflection on the sacrifices made for our nation's freedom.",
        },
        {
          images: [day1Img5, day1Img6, day1Img7, day1Img8, day1Img15],
          sectionTitle: " Mall of Asia Moments ",
          sectionText:
            "We wrapped up the day with a visit to Mall of Asia (MOA)—one of the biggest malls in the country. It was the perfect spot to relax, enjoy a meal, and reflect on the enriching experiences of the day. From history to modern marvels, today offered a perfect blend of culture, learning, and leisure..",
        },
      ],
    },
    {
      id: 2,
      title: "Day 2 - Subic and Law Enforcement",
      date: "2025-04-08",
      description: "Educational Adventures in Subic: From Culture to Port Technology.",
      fullContent:
        "The day began before the sun even rose—4:00 AM, to be exact. With excitement and sleepy eyes, we got ready, grabbed breakfast, and set off for Subic for an educational tour packed with culture, history, and cutting-edge port technology. Along the way, we learned about Pampanga, hailed as the Culinary Capital of the Philippines. Kuya Enan shared how Kapampangans were once the trusted chefs of the Spanish colonizers, a legacy that lives on in their flavorful dishes today. We were introduced to a few local favorites: Tocino – pork marinated in sugar for a sweet, savory finish. Sisig – derived from the word meaning to make it sour, this sizzling dish has become a national favorite.",
      image: coverImg2,
      dayImages: [
        {
          images: [day2Img5, day2Img6, day2Img10, day2Img11, day2Img12],
          sectionTitle: "Subic Bay Exhibition and Convention Center",
          sectionText:
            "Upon arriving in Subic Bay,We entered and admired colorful and beautiful murals displayed along the hallway of the Subic Bay Exhibition and Convention Center (SBECC). Each mural was rich with historical and cultural imagery, reflecting key moments and figures in Philippine history. These vibrant artworks immediately caught our attention, offering a glimpse into the nation's struggles, triumphs, and heritage. Sir Marlon Montero from the Tourism Department thoughtfully explained each piece, sharing the stories and symbolism behind them. He highlighted how the murals represented different eras—from colonial resistance and revolutions to modern achievements in culture, politics, and society. His insights gave us a deeper appreciation for the artwork and the history it encapsulated, making our visit both educational and meaningful. After that, we were then introduced to Mr. Martee De Guzman, our Tour Guide for the whole tour at the SBMA Freeport Zone.",
        },
        {
          images: [day2Img1, day2Img2, day2Img13, day2Img14, day2Img15],
          sectionTitle: "Vessels Traffic Management System (VTMS)",
          sectionText:
            "Upon arriving at the VTMS, Engr. Jerome D. Saddi, ECE, was introduced and led the discussion on the Vessels Traffic Management System (VTMS), essential technology for maintaining safety and efficiency in maritime operations at the Port of Subic Bay. Historically, Subic Bay was a strategic location used by Spanish and American forces, becoming the U.S. Naval Station in 1981 before being turned over to the Philippines in 1992. Today, it stands as a key seaport in Southeast Asia, covering 41 hectares and featuring 15 active piers and wharves. The VTMS integrates radar, CCTV, VHF radio, and AIS to monitor vessel movements, with Port Control and Traffic Officers managing operations. All incoming vessels are required to contact Subic Port Control via Radio Channel 16 and maintain constant communication, with harbor pilots assisting in safe navigation and docking procedures.",
        },
        {
          images: [day2Img3, day2Img4, day2Img16, day2Img17, day2Img18],
          sectionTitle: "Law Enforcement",
          sectionText:
            " Lastly, the final company we visited at SBMA was the Law Enforcement Department. Lt. Derek was introduced to us and provided an overview of port law enforcement operations. From dispatch procedures to daily duties, he emphasized the importance of coordination, vigilance, and discipline in maintaining the security of Subic’s port. We also learned that there is no Philippine National Police (PNP) presence within the SBMA, and the area operates independently without any governors.",
        },
        {
          images: [day2Img7, day2Img9, day2Img01, day2Img02, day2Img03],
          sectionTitle: "Tour around SBMA",
          sectionText:
            " After visiting companies, it was time to see the beauty of Subic Bay. The scenic views, refreshing breeze, and peaceful atmosphere offered a relaxing break. As we drove through the area, we even spotted a tree filled with what looked like fruit hanging from its branches—only to realize they were actually bats! Fun fact: those hanging shapes aren't fruits, they're bats resting in the daylight—one of Subic's unique and fascinating natural sights. We also went to Royal Duty Free, where we had the chance to shop for imported foods and snacks—an enjoyable treat that added a fun, leisurely touch to our educational trip.",
        },
      ],
    },
    {
      id: 3,
      title: "Day 3 - Museum Tour",
      date: "2025-04-09",
      description: "Discovering Filipino history and science through museums.",
      fullContent: "We visited the National Museum of Natural History, QC Memorial Circle, and Car Museum.",
      image: coverImg3,
      dayImages: [
        {
          images: [day3Img1, day3Img2, day3Img5, day3Img8, day3Img12],
          sectionTitle: "Starting at the National Museum of Natural History",
          sectionText:
            " We visited the National Museum of Natural History, located at Rizal Park, Manila. Housed in a beautifully restored neoclassical building, the museum showcases the rich biodiversity and geological history of the Philippines. One of the museum's main highlights is Lolong—the world's largest crocodile in captivity, now preserved and displayed for educational purposes. Seeing Lolong up close was both fascinating and humbling, as it underscored the importance of wildlife conservation. From marine life and tropical forests to indigenous species and natural wonders, each gallery offered us a deeper appreciation for our environment and cultural heritage.",
        },
        {
          images: [day3Img3, day3Img4, day3Img9, day3Img10, day3Img11],
          sectionTitle: "A visit to Quezon Memorial Circle",
          sectionText:
            "Today's journey took us deeper into the roots of the nation as we toured the Quezon Memorial Circle, home to the Museo ni Manuel L. Quezon and a tranquil green space in the heart of Quezon City. It was a day of learning, reflection, and national pride. Inside the Museo ni Manuel L. Quezon, we explored key moments in the life of President Quezon—from his humble beginnings and early political career to his presidency during the Commonwealth period and leadership during the Japanese occupation. Though he passed away before witnessing Philippine independence, his contributions laid the foundation for a free nation. The Quezon Memorial Shrine now stands as both a national shrine and peaceful space for reflection. At its peak, three mourning angels—symbolizing Luzon, Visayas, and Mindanao—hold sampaguita wreaths in honor of Quezon's enduring legacy.",
        },
        {
          images: [day3Img6, day3Img7,day3Img13,day3Img14,day3Img15],
          sectionTitle: "A Glimpse Into the Past: The Car Museum",
          sectionText:
            "Right within the Quezon Memorial Circle, we also visited the Car Museum, which displayed all fascinating collection of vintage vehicles—including cars used by former presidents and important figures in Philippine history. Each vehicle has its own story, reflecting the era and the leadership behind the wheel.",
        },
      ],
    },
    {
      id: 4,
      title: "Day 4 - BSP and HyTec Power Inc.",
      date: "2025-04-10",
      description: "Innovation and Industry: A Visit to BSP and HyTec.",
      fullContent:
        "Our educational adventure continued with eye-opening visits to two major institutions: the Bangko Sentral ng Pilipinas (BSP) and HyTech Power Inc. Each offered a unique glimpse into the world of finance, technology, and innovation in the Philippines.",
      image: coverImg4,
      dayImages: [
        {
          images: [day4Img3, day4Img7, day4Img8, day4Img9, day4Img10],
          sectionTitle: "Bangko Sentral ng Pilipinas (BSP): The Heart of Philippine Currency",
          sectionText:
            "At the BSP facility, although we weren’t able to take actual photos, we witnessed how gold powder is transformed into solid gold bars—a rare behind-the-scenes look at the country's gold reserves. It was an incredible experience, almost like stepping into a high-security vault filled with both history and wealth. We also learned that the BSP isn’t just about printing money. It plays a role in processing land titles and even passports, as the paper used in these documents is similar to that used in currency—highlighting its crucial role in national documentation and economic stability. Perhaps the most fascinating part was observing how Philippine banknotes are printed. We saw the actual machines in action—from layout and printing to cutting and quality control—which gave us a deeper appreciation for the complexity and security measures behind every peso we use. Special thanks to Sir Cyrus for touring us around the BSP and sharing his knowledge with us. (Credits to Google for some of the photos of BSP.) ",
        },
        {
          images: [day4Img1, day4Img2, day4Img4, day4Img5, day4Img6],
          sectionTitle: "HyTech Power Inc.: Bridging Industry and Innovation",
          sectionText:
            "After our Lunch, our next stop was HyTec Power Inc., an educational and industrial training hub dedicated to future-ready learning. The facility is divided into two main divisions: the Industrial Division, which focuses on developing technical and mechanical skills, and the Lifelong Learning Division, which promotes continuous education across all ages, especially in modern technology. We learned about HyTech's global partnerships with Amatrol, a U.S.-based training system specializing in mechatronics and automation, and Ignite, a program that fosters innovative skill development. A highlight of our visit was experiencing Extended Reality (XR)—a fusion of Augmented Reality (AR) and immersive tech—which allowed us to interact with digital content overlaid on the real world. It was a fascinating glimpse into how technology is transforming the future of education and training.",
        },
      ],
    },
    {
      id: 5,
      title: "Day 5 - Light Rail Transit Line 2 & Metropolitan Manila Development Authority",
      date: "2025-04-11",
      description: " A Friday Tour Through LRT-2 and MMDA",
      fullContent:
        "Our final day of the educational tour brought us into the heart of Metro Manila's transport and traffic systems, as we explored LRT-2's operations with Sir Adrian and got an inside look at the MMDA (Metropolitan Manila Development Authority) headquarters.",
      image: coverImg5,
      dayImages: [
        {
          images: [day5Img1, day5Img2, day5Img3, day5Img4, day5Img7, day5Img8, day5Img9, day5Img10, day5Img11, day5Img12],
          sectionTitle: "LRT2 Up Close: A Journey Through Metro Manila's Transit System",
          sectionText:
            "Our morning began with a tour of LRT Line 2, guided by Sir Adrian, who introduced us to the workings of one of Metro Manila's three major rail systems—LRT Line 1, MRT Line 3, and LRT Line 2. We explored the behind-the-scenes operations of LRT2, including its train lift, overhead cranes, and the Light Maintenance System (LMS) used for technical upkeep. We also learned about the train's powerful air-conditioning units (20 horsepower each), and the MegaTrains themselves—manufactured by Hyundai in 2002—which can carry up to 1,628 passengers. Maintenance vehicles like the UROMAC truck from Spain, along with multipurpose transport units, help ensure the system runs smoothly. Fun fact: a single train tire weighs 308 kg, with the full set reaching up to 1,250 kg! The tour concluded with a scenic and comfortable ride from Santolan to Antipolo and back—bringing all the technical knowledge to life through real experience.",
        },
        {
          images: [day5Img5, day5Img6, day5Img13, day5Img14, day5Img15],
          sectionTitle: "MMDA: Commanding the Flow of the City",
          sectionText:
            "In the afternoon, we visited the MMDA (Metropolitan Manila Development Authority) to gain insight into how the agency monitors and manages Metro Manila's traffic flow and emergency response systems. Inside their Operations Center, we explored the Data Center, where real-time road data is gathered, and the Situation Room, which oversees traffic conditions, weather updates, and major incidents across the metropolis. We were also introduced to their Intelligent Transport Systems (ITS), including the Automatic Incident Verification (AIV), AIV Command Center (AIVC), and the Hytera Smart Dispatch System—a communication tool that enables seamless coordination among traffic enforcers and emergency responders. The visit highlighted how technology plays a crucial role in maintaining safety and order on the roads.",
        },
      ],
    },
    {
      id: 6,
      title: "Day 6 - Start of Baguio Tour",
      date: "2025-04-12",
      description: "A Saturday Escape to Baguio: Strawberry Farm, Bell Church, Philippine Military Academy, and  Mines View Park",
      fullContent:"We left Quezon City around 1:00 AM and arrived in Baguio at approximately 5:00 AM, greeted by the crisp mountain air and the quiet beauty of a city just beginning to wake. Despite the early hour and the chilly atmosphere, our excitement kept us warm and energized as we embarked on our cold yet charming adventure.",
      image: coverImg6,
      dayImages: [
        {
          images: [day6Img1, day6Img2, day6Img3, day6Img4,day6Img29],
          sectionTitle: "Strawberry Farm Sunrise",
          sectionText:
            "Our first stop: the famous Strawberry Farm in La Trinidad. The cool breeze and the scenic rows of plants stretching across the field made for the perfect start to our day. Although we didn't get to pick strawberries ourselves, we enjoyed roaming around the area, taking photos, and admiring the view. The place had a calm and refreshing atmosphere, with stalls nearby selling fresh strawberries, local jams, and handmade souvenirs. It was a simple yet memorable experience that gave us a taste of Baguio's charm and agricultural pride.",
        },
        {
          images: [day6Img5, day6Img6, day6Img7, day6Img8, day6Img9],
          sectionTitle: "A Moment of Peace at Bell Church",
          sectionText:
            "Next, we visited the Bell Church, known for its peaceful gardens, traditional Chinese architecture, and calming atmosphere. It offered a spiritual pause and a unique cultural experience. After visiting the Bell Church, we finally checked in at Prince Plaza Hotel where we had breakfast and took a short rest. It was the perfect way to refuel before our afternoon explorations.",
        },
        {
          images: [day6Img10, day6Img11, day6Img12, day6Img13, day6Img14],
          sectionTitle: "Visiting the Philippine Military Academy",
          sectionText:
            "After lunch, we headed to the Philippine Military Academy (PMA)—a prestigious institution that embodies history, discipline, and national pride. As we entered the grounds, we were welcomed by vast open spaces, well-maintained lawns, and a serene atmosphere. Visiting the Academy had always been a dream of mine, and being there in person felt both surreal and deeply fulfilling. We wandered around the campus, admired statues of national heroes and military figures, and explored the historical displays scattered throughout the area. One of the highlights was the breathtaking view overlooking the surrounding mountains and landscape, providing the perfect backdrop for countless photos. It was a refreshing and memorable stop—like my inner child was thrilled to finally see the Academy in person. The visit added not only scenic beauty but also a deep sense of national pride to our trip.",
        },
        {
          images: [day6Img19, day6Img18, day6Img15, day6Img16, day6Img17],
          sectionTitle: "The Mansion: A Presidential Sight",
          sectionText:
            "Our next stop was The Mansion, one of Baguio's most elegant landmarks. Originally built in 1908, it now serves as the official summer residence of the Philippine President. Its grand iron gate and white facade gave off a stately vibe, perfect for group and solo photos. We weren't able to go inside the Mansion, but standing in front of the well-kept gardens and historic gates gave us a sense of national pride and nostalgia.",
        },
        {
          images: [day6Img20, day6Img21, day6Img22, day6Img24, day6Img25],
          sectionTitle: "Mines View Park: A Cultural and Scenic Experience",
          sectionText:
            "A short drive from The Mansion took us to the popular Mines View Park. As we arrived, we immediately tried on their traditional Cordilleran attire, complete with colorful woven fabrics and native headdresses. It was fun to embrace the local culture and pose for photos with the stunning backdrop of Baguio's mountains. The view was truly breathtaking—rolling hills, pine trees, and remnants of the old mining town far below. We took our time strolling through the souvenir stalls, where everything from wood carvings to knitted sweaters tempted us.",
        },
        {
          images: [day6Img26, day6Img27, day6Img28, day6Img30, day6Img31],
          sectionTitle: "Night Strolls and Street Food Cravings",
          sectionText:
            "After dinner, we wrapped up our day with a trip to the lively Baguio Night Market along Harrison Road. It was buzzing with energy—vendors selling clothes, accessories, and especially food, and crowds moving from stall to stall. We tried some delicious local eats, soaked in the night vibes, and let the cool mountain air guide us through the colorful chaos.",
        },
      ],
    },
    {
      id: 7,
      title: "Day 7 - End of Baguio Tour",
      date: "2025-04-13",
      description: "Baguio: A Memorable Goodbye.",
      fullContent:
        "Our final day in Baguio began on a quiet and sentimental note. After a night filled with exploration, culture, eating and laughter, it was finally time to head back to QC — but not before one last adventure in the city.",
      image: coverImg7,
      dayImages: [
        {
          images: [day7Img1, day7Img2, day7Img3, day7Img4, day7Img5],
          sectionTitle: "Packing Mtories, not just Souveniers: Wrapping up our Baguio Tour",
          sectionText:
            "We started our Sunday with a warm and hearty breakfast, still enjoying the cool Baguio breeze. Afterward, we made our way to the Maharlika Shopping Center—one of Baguio’s classic go-to spots for pasalubong. The scent of fresh peanut brittle, ube and strawberry jam, woven crafts, and local trinkets filled the air as we browsed the stalls for last-minute gifts and souvenirs. We also took a leisurely stroll around Burnham Park. It was our final chance to bring a piece of Baguio home with us—and most of us didn’t leave empty-handed! After our shopping run, we returned to the hotel for one last meal together: lunch filled with laughter and stories from the past few days. We packed our bags, double-checked our souvenirs—especially the strawberries, hoping they would survive the long journey—and took a few more photos before checking out. By early afternoon, we boarded our ride back to Quezon City, tired but fulfilled. It was more than just a trip—it was an experience filled with learning, friendship, discovery, and lasting memories. From city tours to strawberry farms, train systems to night markets, every day offered something meaningful to remember.",
        },
      ],
    },
    {
      id: 8,
      title: "Day 8 - Flight back to Zamboanga",
      date: "2025-04-14",
      description: "Until Next Time, Manila: Our Flight Back to Zamboanga",
      fullContent:
        "All great adventures must come to an end—and today, our journey did just that. There was a different kind of silence in the air as we packed our bags, folded our last souvenirs, and stepped out of the DJM Dormitory for the final time.",
      image: coverImg8,
      dayImages: [
        {
          images: [day8Img1, day8Img2, day8Img3, day8Img4, day8Img5],
          sectionTitle: "That's a wrap!",
          sectionText:
            "We left at exactly 9:00 AM, suitcases in hand, saying goodbye to the place that became our home for the past few days. The ride to the airport was quiet, but not heavy. It was the quiet that comes after days filled with stories, learning, laughter, and discovery. By 10:00 AM, we were at the airport, lining up for check-in. The routine felt familiar now—but there was a bit of excitement in the air, too. After all, while we were heading home, the airport still had one more surprise in store. Then, out of nowhere, excitement sparked. One of our classmates nudged us and whispered, Isn't that…? Sure enough, they had spotted Anthony Jennings and Iggy Boy Flores nearby. We could hardly believe it! Thanks to their quick eye, we all got to share a moment we'll never forget—we even managed to take photos with them. They were friendly and cool, and that brief encounter felt like a bonus chapter to our Manila story. Soon, it was time to board. As we settled into our seats and the plane lifted off the tarmac, we left behind not just the city but a collection of unforgettable experiences—from historical landmarks and educational tours to cool Baguio mornings and that surprise celebrity sighting at the airport. When we touched down in Zamboanga, the air felt warmer, the streets more familiar—but inside, we knew we were bringing something new back with us: friendships strengthened, stories to tell, and a sense of wonder that only a journey like this could give.",
        },
      ],
    },
  ]

  const scrollToPosts = () => {
    postsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="container home-container">
      {selectedPost ? (
        <div className="selected-post-container">
          <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
        </div>
      ) : (
        <>
          <section className="home-hero">
            <h1>Educational Tour Blog</h1>
            <p>
            A glimpse into our 8-day educational tour—city explorations, company visits, 
            and a memorable Baguio escape. Real-world learning beyond the classroom.
            </p>
          </section>

          <div className="button-container">
            <button onClick={scrollToPosts} className="primary-button">
              <ChevronDown className="w-6 h-6" />
              <span className="sr-only">Explore My Blog</span>
            </button>
          </div>

          <section ref={postsRef} className="posts-section">
            <div className="posts-grid">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} onClick={() => handlePostClick(post)} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Home
