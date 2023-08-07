import React, { useState, useRef, useEffect } from "react";
import Card from "@/Components/Cards/Card";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header/Header";
import styles from "./index.module.css";
import ContactForm from "@/Components/ContactForm/ContactForm";
import Footer from "@/Components/Footer/Footer";

const cardData = [
  {
    id: "card1",
    thumbnail: "/Assassin's Creed BrotherHood.jpg",
    title: "Assassin's Creed BrotherHood",
    disc: "Become Ezio, the Master Assassin, and build your Brotherhood to take down the Borgias.",
    link: "https://drive.google.com/file/d/1JCqacu4jc7aELOYnf1PbTdCGmvPkEWvZ/view?usp=drive_link",
  },
  {
    id: "card2",
    thumbnail: "/Assassin's Creed II.jpg",
    title: "Assassin's Creed II",
    disc: "Experience the Renaissance as Ezio Auditore da Firenze, a young noble turned Assassin.",
    link: "https://drive.google.com/file/d/1B4qjr7D0OgFof-7oSR1WQtAXHG810nC/view?usp=drive_link",
  },
  {
    id: "card3",
    thumbnail: "/Assassin's Creed III.jpg",
    title: "Assassin's Creed III",
    disc: "Fight for freedom in the American Revolution as Connor, a Native American Assassin.",
    link: "https://drive.google.com/file/d/17VfCeG62HaNVSOt2mLYCGnX3Dz6cVgJ9/view?usp=drive_link",
  },
  {
    id: "card4",
    thumbnail: "/Assassin's Creed IV Black Flag.jpg",
    title: "Assassin's Creed IV Black Flag",
    disc: "Sail the Caribbean as a pirate, Edward Kenway, and become an Assassin.",
    link: "https://drive.google.com/file/d/1yWsjEHATnvaaInQWpCvMxseDOk_TmxMF/view?usp=drive_link",
  },
  {
    id: "card5",
    thumbnail: "/Assassin's Creed Revelation.png",
    title: "Assassin's Creed Revelation",
    disc: "Return to Constantinople as Ezio Auditore and uncover the secrets of Altaïr's library.",
    link: "https://drive.google.com/file/d/18rFuqWJvjp91TRQ0CGWE9qbeUZHf6oDo/view?usp=drive_link",
  },
  {
    id: "card6",
    thumbnail: "/Assassin's Creed Rogue.jpg",
    title: "Assassin's Creed Rogue",
    disc: "Play in the 18th century and experience the other side of the Assassin's conflict.",
    link: "https://drive.google.com/file/d/13me61DuQx4hnlYUL0vRms3GIfaCH3FEd/view?usp=drive_link",
  },
  {
    id: "card7",
    thumbnail: "/Assassin's Creed Syndicate.jpg",
    title: "Assassin's Creed Syndicate",
    disc: "Explore a new combat system and weapons in Assassin's Creed Syndicate.",
    link: "https://drive.google.com/file/d/15u3WTEiwUOA3s65B3X2neq1WWt4iw5Ob/view?usp=drive_link",
  },
  {
    id: "card8",
    thumbnail: "/Assassin's Creed Unity.jpg",
    title: "Assassin's Creed Unity",
    disc: "Explore revolutionary Paris as Arno Dorian, an Assassin.",
    link: "https://drive.google.com/file/d/16Pc-2jzwj9OYV1hLMgoR3RcdsaPt0n4u/view?usp=drive_link",
  },
  {
    id: "card9",
    thumbnail: "/Assassin's Creed Valhalla.jpg",
    title: "Assassin's Creed Valhalla",
    disc: "Become Eivor, a Viking raider, and conquer England in Assassin's Creed Valhalla.",
    link: "https://drive.google.com/file/d/1lvLaKTdpM9jEWEuJZnfJXpaMY4xKPA30/view?usp=drive_link",
  },
  {
    id: "card10",
    thumbnail: "/Assassin's Creed.jpg",
    title: "Assassin's Creed",
    disc: "Historical stealth action game with a centuries-old conflict.",
    link: "https://drive.google.com/file/d/1Yvp-2T_4JBKgEGuLputkstFeuF4PaIny/view?usp=drive_link",
  },
  {
    id: "card11",
    thumbnail: "/Days Gone.jpg",
    title: "Days Gone",
    disc: "Post-apocalyptic open-world survival horror game.",
    link: "https://drive.google.com/file/d/1ghpRyVqtuXJL4GezkM4Gzfwk22mLlf4/view?usp=drive_link",
  },
  {
    id: "card12",
    thumbnail: "/Far Cry Primal.jpg",
    title: "Far Cry Primal",
    disc: "Explore the Stone Age in an open-world survival game.",
    link: "https://drive.google.com/file/d/12XkKyLRb_qZno2qEaoCqAn5D2MLo0K2Q/view?usp=drive_link",
  },
  {
    id: "card13",
    thumbnail: "/Far Cry New Dawn.jpg",
    title: "Far Cry New Dawn",
    disc: "Post-apocalyptic Hope County, Montana with new threats.",
    link: "https://drive.google.com/file/d/1UJacPvBwcbHMn0vnWiMFuSHwqYL_soH/view?usp=drive_link",
  },
  {
    id: "card14",
    thumbnail: "/Far Cry 3.jpg",
    title: "Far Cry 3",
    disc: "Explore a tropical island and fight a ruthless pirate cult.",
    link: "https://drive.google.com/file/d/1t39cdOw4vp41nciP8GtXVXCTdA55aCHA/view?usp=drive_link",
  },
  {
    id: "card15",
    thumbnail: "/Far Cry 5.jpg",
    title: "Far Cry 5",
    disc: "Explore Hope County, Montana, and fight a doomsday cult.",
    link: "https://drive.google.com/file/d/16dL6k7Tgba4df5qa6zoYj_VIML5YO3os/view?usp=drive_link",
  },
  {
    id: "card16",
    thumbnail: "/Far Cry 6.jpg",
    title: "Far Cry 6",
    disc: "Explore Yara, a Cuban-inspired open world, and fight a ruthless dictator.",
    link: "https://drive.google.com/file/d/1gJmGk91T8epN1_RJKSM00gI637zstFjH/view?usp=drive_link",
  },
  {
    id: "card17",
    thumbnail: "/Grand Theft Auto IV.jpg",
    title: "Grand Theft Auto IV",
    disc: "Explore Liberty City as Niko Bellic and live the life of a criminal.",
    link: "https://drive.google.com/file/d/1ZRoWflfZzRry_WUKp6f1w6lCK_1zKSYC/view?usp=drive_link",
  },
  {
    id: "card18",
    thumbnail: "/Grand Theft Auto The Trilogy.jpg",
    title: "Grand Theft Auto The Trilogy",
    disc: "Remastered versions of three classic Grand Theft Auto games.",
    link: "https://drive.google.com/file/d/111PYmGKs21XSL5gfQ0ZnlBraAxuZR8f/view?usp=drive_link",
  },
  {
    id: "card19",
    thumbnail: "/Grand Theft Auto V.jpg",
    title: "Grand Theft Auto V",
    disc: "Explore Los Santos as Franklin, Michael, and Trevor in an open-world crime spree.",
    link: "https://drive.google.com/file/d/1CH5kXplVfJLMjy_OiRZTsNmUC7m1RQpq/view?usp=drive_link",
  },
  {
    id: "card20",
    thumbnail: "/Prince of Persia - The Forgotten Sands.jpg",
    title: "Prince of Persia - The Forgotten Sands",
    disc: "Unleash the Sands of Time to save your father in an epic adventure.",
    link: "https://drive.google.com/file/d/1XlB4Y-OzDJVGNVDWIZOUgCoAEE1y7qZZ/view?usp=drive_link",
  },
  {
    id: "card21",
    thumbnail: "/Prince of Persia 2008.jpg",
    title: "Prince of Persia 2008",
    disc: "Swashbuckling adventure with acrobatic platforming and time-bending powers.",
    link: "https://drive.google.com/file/d/1Icl9juW7drKOOntLLMnSGRVd8uzoQOS/view?usp=drive_link",
  },
  {
    id: "card22",
    thumbnail: "/Prince of Persia The Sands of Time.jpg",
    title: "Prince of Persia The Sands of Time",
    disc: "Time-bending platforming adventure in a mythical Persia.",
    link: "https://drive.google.com/file/d/1MsMewzYLxocugDaCBCXVn1BThUKOPZZk/view?usp=drive_link",
  },
  {
    id: "card23",
    thumbnail: "/Prince of Persia The Two Thrones.jpg",
    title: "Prince of Persia The Two Thrones",
    disc: "Become the dark Prince and unleash your inner power in an epic adventure.",
    link: "https://drive.google.com/file/d/17YdvBWAHahMU39_pEGYgeuyaPcG9yxPK/view?usp=drive_link",
  },
  {
    id: "card24",
    thumbnail: "/Prince of Persia Warrior Within.jpg",
    title: "Prince of Persia Warrior Within",
    disc: "Battle your inner demons and the Dahaka in a dark and twisted world.",
    link: "https://drive.google.com/file/d/1M8LGmp_2euXA0fszZSJtyZuQHcaVx1Rq/view?usp=drive_link",
  },
  {
    id: "card25",
    thumbnail: "/Red Dead Redemption II.jpg",
    title: "Red Dead Redemption II",
    disc: "Explore the Wild West as Arthur Morgan in an epic open-world adventure.",
    link: "https://drive.google.com/file/d/1S7hsxMlnGC5ssJwV_03LHvW8exVvbGlt/view?usp=drive_link",
  },
  {
    id: "card26",
    thumbnail: "/Red Dead Redemption.jpg",
    title: "Red Dead Redemption",
    disc: "Outlaw the Wild West as John Marston in a gripping story-driven adventure.",
    link: "https://drive.google.com/file/d/1A_2NZTuc2dpxKOFMWQ4N94Lf9_7KwKi0/view?usp=drive_link",
  },
  {
    id: "card27",
    thumbnail: "/Resident Evil 2 Remake.png",
    title: "Resident Evil 2 Remake",
    disc: "Remastered survival horror classic with stunning visuals and new gameplay features.",
    link: "https://drive.google.com/file/d/1ph8pxYVdzpL8XMV7SLvLtTe_3s6FZyNc/view?usp=drive_link",
  },
  {
    id: "card28",
    thumbnail: "/Resident Evil 3 Remake.jpg",
    title: "Resident Evil 3 Remake",
    disc: "Fast-paced survival horror action with a terrifying new enemy.",
    link: "https://drive.google.com/file/d/1_g2Hav98f0UqXk6Xaz2awf1mJ9jdtFg9/view?usp=drive_link",
  },
  {
    id: "card29",
    thumbnail: "/Resident Evil 4 Remake.jpeg",
    title: "Resident Evil 4",
    disc: "Stop the spread of biological weapons in a thrilling action-packed game.",
    link: "https://drive.google.com/file/d/1Uvc2iN_ZNlCEeeWbTs82lFg_wLjGsiCu/view?usp=drive_link",
  },
  {
    id: "card30",
    thumbnail: "/Resident Evil 5.jpg",
    title: "Resident Evil 5",
    disc: "Team up with AI or a friend and survive the horrors of Kijuju.",
    link: "https://drive.google.com/file/d/1gkeTCKhEmID1qx-M7QU6ITmmyfnSjT4v/view?usp=drive_link",
  },
  {
    id: "card31",
    thumbnail: "/Resident Evil 6.jpg",
    title: "Resident Evil 6",
    disc: "Experience the horror from different perspectives as multiple characters.",
    link: "https://drive.google.com/file/d/1G4cqZSILvQZ56bVQx1kgsKxU99LIs_fq/view?usp=drive_link",
  },
  {
    id: "card32",
    thumbnail: "/Resident Evil 7 BioHazrad.jpg",
    title: "Resident Evil 7 Biohazard",
    disc: "Immerse yourself in a first-person horror experience in the Baker family's residence.",
    link: "https://drive.google.com/file/d/1oqznlSSBQzokZvXuluprsW_KpHBRuHse/view?usp=drive_link",
  },
  {
    id: "card33",
    thumbnail: "/Resident Evil 8 Village.jpg",
    title: "Resident Evil Village",
    disc: "Continue the story of Ethan Winters in a mysterious European village.",
    link: "https://drive.google.com/file/d/1msUevPl78NPoSZs8xlBROtFme1JQRIVc/view?usp=drive_link",
  },
  {
    id: "card34",
    thumbnail: "/The Witcher 2 Assassins of  Kings.jpg",
    title: "The Witcher 2 Assassins",
    disc: "Embark on a dark and mature fantasy adventure as Geralt of Rivia.",
    link: "https://drive.google.com/file/d/1DDJY7A2xBtfosM1gPw4Ww7Gvt3V3vNkf/view?usp=drive_link",
  },
  {
    id: "card35",
    thumbnail: "/The Witcher 3 Wild Hunt.jpg",
    title: "The Witcher 3 Wild Hunt",
    disc: "Explore the open world as Geralt of Rivia, a monster hunter for hire.",
    link: "https://drive.google.com/file/d/1kGqVcquv__CWC_S54LTo8qfn6h0_3RJ7/view?usp=drive_link",
  },
  {
    id: "card36",
    thumbnail: "/The Witcher.jpg",
    title: "The Witcher.",
    disc: "Begin the epic RPG journey with Geralt of Rivia, the Witcher.",
    link: "https://drive.google.com/file/d/1taDN7VZymrM7A6o7m0_C3D4PEsZofwaP/view?usp=drive_link",
  },
];
export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const headerRef = useRef(null);
  const searchResultRef = useRef(null);
  const [shouldScrollToResults, setShouldScrollToResults] = useState(false);

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Scroll to the Header on initial page load
    if (!searchTerm && headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [searchTerm]);

  useEffect(() => {
    // Scroll to the searched items when the filteredCards change
    if (shouldScrollToResults && searchResultRef.current) {
      searchResultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setShouldScrollToResults(false); // Reset the flag after scrolling
    }
  }, [shouldScrollToResults, filteredCards]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShouldScrollToResults(true); // Set the flag to true when searching
  };

  return (
    <>
      <div className={styles.back}>
        <div className={styles.nav}>
          <Navbar onSearch={handleSearch} />
        </div>
        <div ref={headerRef}>
          <Header />
        </div>
        {searchTerm.length > 0 && (
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "20px 0",
              fontFamily: "poppins",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            You Search: {searchTerm}
          </h2>
        )}

        <div ref={searchResultRef} className={styles.card}>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card
                key={card.id}
                thumbnail={card.thumbnail}
                title={card.title}
                disc={card.disc}
                link={card.link}
              />
            ))
          ) : (
            <p
              style={{
                color: "red",
                textAlign: "center",
                margin: "20px 0",
                fontSize: "30px",
                fontFamily: "inter",
              }}
            >
              😣 Game not found. Available shortly.
            </p>
          )}
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
