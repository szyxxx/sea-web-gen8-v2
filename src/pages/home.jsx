import React from "react"
import { Section, Section1Span, Section1Button } from "../assets/components/home/section1"
import { Section2Assistant, Section2Card, Section2StudyGroup } from "../assets/components/home/section2";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import { Link as Navigate } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="navbar flex px-20 py-4 items-center fixed bg-transparent backdrop-blur-lg w-screen top-0 rounded-md">
      <div className="navbar-logo text-lg font-bold md:py-0 py-4">
        <img src="src/assets/SEA-logo.PNG" alt="sea-logo" className="h-12"></img>
      </div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
      <NavbarItems index={1} items="HOME"></NavbarItems>
      <NavbarItems index={2} items="PROGRAMS"></NavbarItems>
      <NavbarItems index={3} items="ABOUT"></NavbarItems>
      <NavbarItems index={4} items="ASSISTANTS"></NavbarItems>
      <NavbarItems items={<MdOutlineLightMode />}></NavbarItems>

      </ul>
    </nav>
  )
}
const NavbarItems = (props) => {
  return (
    <li className="flex md:inline-flex p-3 items-center hover:bg-sky-400 rounded hover:text-white font-Cascadia font-semibold">
      <Link
        to={`section${props.index}`}
        smooth={true}
        duration={500}
      >
        {props.items}
      </Link>
    </li>
  );
};


const Section1 = () => {
  
  return (
    <Section class="section1">
        <div className="flex flex-col items-center py-3 gap-3">
          <Section1Span color="text-grey-960" text="WELCOME TO"></Section1Span>
          <Section1Span color="text-sky-400" text="SEA LABORATORY"></Section1Span>
        </div>
        <div className="flex gap-x-10 py-3">
          <Navigate to="/sea-web-gen8-v2/login" smooth={true} duration={500}><Section1Button border="border-sky-400" bg="bg-sky-400" textcolor="text-white" text="LOGIN" height="h-16" width="w-36"></Section1Button></Navigate>
          <Link to="section2" smooth={true} duration={500}> <Section1Button border="border-sky-400" bg="bg-transparent" textcolor="text-black" text="EXPLORE" height="h-16" width="w-36"></Section1Button></Link>
        </div>
    </Section>
  )
}

const Section2 = () => {
  return (
    <Section class="section2">
      <h1 className="font-Cascadia text-6xl font-semibold text-sky-400">PROGRAMS</h1>
      <Section2Card 
        text="STUDY GROUP" 
        desc="SEA Laboratory Study Group adalah komunitas belajar yang didedikasikan untuk membantu anggotanya mengembangkan keterampilan di berbagai bidang teknologi informasi. Dengan fokus pada lima divisi utama, study group ini memberikan kesempatan kepada anggotanya untuk mengeksplorasi dan mendalami aspek-aspek kunci dalam dunia pengembangan perangkat lunak.">
        <Section2StudyGroup logo="fundamental" card="Fundamental" desc="Divisi ini membantu anggota study group membangun dasar-dasar yang kuat dalam pemrograman."></Section2StudyGroup>
        <Section2StudyGroup logo="desktop" card="Desktop Development" desc="Divisi ini mengeksplorasi pengembangan perangkat lunak desktop untuk berbagai platform."></Section2StudyGroup>
        <Section2StudyGroup logo="mobile" card="Mobile Development" desc="Divisi ini fokus dalam pengembangan aplikasi mobile untuk platform Android dengan bahasa Kotlin."></Section2StudyGroup>
        <Section2StudyGroup logo="web" card="Web Development" desc="Divisi ini akan merambah dunia web mulai dari html hingga framework web modern"></Section2StudyGroup>
        <Section2StudyGroup logo="game" card="Game Development" desc="Divisi ini mengajak anggotanya untuk memahami seluk-beluk pembuatan permainan menggunakan unity engine."></Section2StudyGroup>
      </Section2Card>
      <Section2Card 
        text="RESEARCH GROUP"
        desc="Research Group SEA Laboratory adalah sebuah kelompok penelitian yang berfokus pada pengembangan dan inovasi di bidang Software. Dipimpin oleh seorang dosen yang berkomitmen, laboratorium ini memusatkan perhatian pada berbagai aspek software engineering, termasuk analisis kebutuhan, desain, pengembangan, pengujian, dan pemeliharaan aplikasi.">
      </Section2Card>
    </Section>
  )
}

const Section3 = () => {
  return (
    <Section class="section3">
      <div className="flex flex-col bg-sky-200/25 w-10/12 rounded-xl m-12 justify-center px-12 py-10">
        <div className="flex flex-col justify-center items-center gap-y-8">
          <h1 className="bg-sky-500/75 rounded-lg font-Cascadia text-white text-3xl font-semibold p-3">ABOUT US</h1>
          <p className="text-white text-xl">
            <b>SEA Laboratory (Software Engineering and Application)</b> adalah laboratorium 
            prodi jurusan <b>S1 Teknik Komputer</b> yang berlokasi di <b>Telkom University Bandung</b>.
            <br/><br/>    
            Laboratorium ini juga menyediakan fasilitas dan dukungan bagi mahasiswa dan
            dosen yang ingin melakukan penelitian, pengembangan, dan pengajaran di
            bidang rekayasa perangkat lunak dan aplikasi.
          </p>
        </div>
      </div>
    </Section>
  )
}

const Section4 = () => {
  return (
    <Section class="section4">
      <h2 className="font-Cascadia text-6xl text-white font-semibold">ASSISTANTS</h2>
      <section className="executive flex gap-y-3 gap-x-28 justify-center">
        <Section2Assistant instagram="https://www.instagram.com/cettamaulana_" linkedin="https://www.linkedin.com/in/cettama/" image="cma" assistant="Cetta Maulana Andhika" position="Wakil Koordinator Asisten"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/faraday.bf/" linkedin="https://www.linkedin.com/in/faradaybarr/" image="ara" assistant="Faraday Barr Fatahilah" position="Koordinator Asisten"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/lase_aldo" linkedin="https://www.linkedin.com/in/aldolase/" image="dao" assistant="Aldo Nitehe Lase" position="Koordinator Riset"></Section2Assistant>
      </section>
      <section className="administration flex gap-y-3 gap-x-28 justify-center">
        <Section2Assistant instagram="https://www.instagram.com/kinanra/" linkedin="https://www.linkedin.com/in/kinantirahayuazhra/" image="krz" assistant="Kinanti Rahayu Az-Zahra" position="Sekretaris"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/limeysplash_/" linkedin="https://www.linkedin.com/in/samalimramadhan/" image="sam" assistant="Sam Alim Ramadhan" position="Sekretaris"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/miuddinsyah_" linkedin="https://www.linkedin.com/in/miuddinsyah/" image="ats" assistant="Azmi Taqiuddin Syah" position="Bendahara"></Section2Assistant>
      </section>
      <section className="practicum flex gap-y-3 gap-x-14 justify-center">
        <Section2Assistant instagram="https://www.instagram.com/panjichrst_/" linkedin="https://www.linkedin.com/in/pajichrstp/" image="yna" assistant="Panji Christoper Silalahi" position="Praktikum"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/ygs.hrlmbng" linkedin="https://www.linkedin.com/in/yogas-herlambang-9672931bb/" image="yog" assistant="Yohannes Yogas Herlambang" position="Praktikum"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/muhammadabyann" linkedin="https://www.linkedin.com/in/muhammad-abyan-8451471b6/" image="ars" assistant="Muh. Abyan Ridhan Siregar" position="Praktikum"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/maulanaja_/" linkedin="https://www.linkedin.com/in/sefsofamaulanaja/" image="sef" assistant="Sef Sofa Maulanaja" position="Praktikum"></Section2Assistant>
      </section>
      <section className="public-relation flex gap-y-3 gap-x-28 justify-center">
        <Section2Assistant instagram="https://www.instagram.com/kinanti.aria/" linkedin="https://www.linkedin.com/in/kinantiaria/" image="kin" assistant="Kinanti Aria Widaswara" position="Public Relation"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/axelldvid/" linkedin="https://www.linkedin.com/in/axelldavid/" image="axl" assistant="Axel David" position="Public Relation"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/sulthan.13" linkedin="https://www.linkedin.com/in/sulthannauval/" image="sna" assistant="Sulthan Nauval Abdillah" position="Public Relation"></Section2Assistant>
      </section>
      <section className="logistics flex gap-y-3 gap-x-28 justify-center">
        <Section2Assistant instagram="https://www.instagram.com/farrel.tamaa/" linkedin="https://www.linkedin.com/in/muhammad-farrel-ahadi-tama-0b0628220/" image="tam" assistant="Muh. Farrel Ahadi Tama" position="Inventaris"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/andreewp__" linkedin="https://www.linkedin.com/in/andreewp__" image="and" assistant="Andreas Wahyu Prayogo" position="Inventaris"></Section2Assistant>
        <Section2Assistant instagram="https://www.instagram.com/fxdhil.dz/" linkedin="https://www.linkedin.com/in/fxdhil.dz" image="fdz" assistant="Fadhil Dzikri Aqila" position="Inventaris"></Section2Assistant>
      </section>
    </Section>
  )
}

const Section5 = () => {
  return (
    <footer className="flex justify-between px-48 py-10 bg-white gap-x-40 font-Cascadia text-sky-400">
      <div className="flex flex-col items-start text-left gap-y-3">
        <span className="font-bold text-xl">ADDRESS</span>
        <span className="text-sm">Gedung TULT 1405 Lantai 14,<br/>
              Jl. Telekomunikasi Terusan Buah Batu,<br/>
              Bandung 40257,<br/>
              Indonesia
        </span>
      </div>
      <div className="flex flex-col items-start text-left gap-y-3">
      <span className="font-bold text-xl">FOLLOW US</span>
        <div className="flex flex-row items-start text-left gap-x-3">
          <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=748waapd"><img src="src\assets\line_icon.png" className="h-10"/></a>
          <a href="https://www.instagram.com/sea.laboratory/"><img src="src\assets\instagram_icon.png"  className="h-10"/></a>
          <a href="https://www.youtube.com/@SEALaboratory"><img src="src\assets\youtube_icon.png"  className="h-10"/></a>
        </div>
      </div>
    </footer>
  )
}
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
    </div>
  )
}

export default Home