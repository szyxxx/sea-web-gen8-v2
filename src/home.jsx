import React from "react"
import { Section, Section1Span, Section1Button } from "./assets/components/home/section1"
import { Section2Card, Section2StudyGroup } from "./assets/components/home/section2";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar flex px-20 py-4 items-center fixed bg-white/75 backdrop-blur-lg w-screen top-0 rounded-md">
      <div className="navbar-logo text-lg font-bold md:py-0 py-4">
        <img src="src/assets/SEA-logo.png" alt="sea-logo" className="h-12"></img>
      </div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <NavbarItems items="HOME"></NavbarItems>
        <NavbarItems items="PROGRAMS"></NavbarItems>
        <NavbarItems items="ABOUT"></NavbarItems>
        <NavbarItems items="ASSISTANTS"></NavbarItems>
        <NavbarItems items={<MdOutlineLightMode />}></NavbarItems>
      </ul>
    </nav>
  )
}
const NavbarItems = (props) => {
  return (
    <li className="flex md:inline-flex p-3 items-center hover:bg-sky-400 rounded hover:text-white font-Cascadia font-semibold">
      <a href="#">{props.items}</a>
    </li>
  )
}

const Section1 = () => {
  return (
    <Section class="section1">
        <div className="flex flex-col items-center py-3 gap-3">
          <Section1Span color="text-grey-960" text="WELCOME TO"></Section1Span>
          <Section1Span color="text-sky-400" text="SEA LABORATORY"></Section1Span>
        </div>
        <div className="flex gap-x-10 py-3">
          <Section1Button border="border-sky-400" bg="bg-sky-400" textcolor="text-white" text="LOGIN" height="h-16" width="w-36"></Section1Button>
          <Section1Button border="border-sky-400" bg="bg-transparent" textcolor="text-black" text="EXPLORE" height="h-16" width="w-36"></Section1Button>
        </div>
    </Section>
  )
}

const Section2 = () => {
  return (
    <Section>
      <h1 className="font-Cascadia text-6xl font-semibold text-sky-400">PROGRAMS</h1>
      <Section2Card 
        text="STUDY GROUP" 
        desc="SEA Laboratory Study Group adalah komunitas belajar yang didedikasikan untuk membantu anggotanya mengembangkan keterampilan di berbagai bidang teknologi informasi. Dengan fokus pada lima divisi utama, study group ini memberikan kesempatan kepada anggotanya untuk mengeksplorasi dan mendalami aspek-aspek kunci dalam dunia pengembangan perangkat lunak.">
        <Section2StudyGroup color="to-violet" logo="fundamental" card="Fundamental" desc="Divisi ini membantu anggota study group membangun dasar-dasar yang kuat dalam pemrograman."></Section2StudyGroup>
        <Section2StudyGroup color="to-blue" logo="desktop" card="Desktop Development" desc="Divisi ini mengeksplorasi pengembangan perangkat lunak desktop untuk berbagai platform."></Section2StudyGroup>
        <Section2StudyGroup color="to-green" logo="mobile" card="Mobile Development" desc="Divisi ini fokus dalam pengembangan aplikasi mobile untuk platform Android dengan bahasa Kotlin."></Section2StudyGroup>
        <Section2StudyGroup color="to-orange" logo="web" card="Web Development" desc="Divisi ini akan merambah dunia web mulai dari html hingga framework web modern"></Section2StudyGroup>
        <Section2StudyGroup color="to-red" logo="game" card="Game Development" desc="Divisi ini mengajak anggotanya untuk memahami seluk-beluk pembuatan permainan menggunakan unity engine."></Section2StudyGroup>
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
      <section className="flex gap-y-3 justify-center">
        <div className="flex flex-col w-10 bg-gradient-to-br border-">
        </div>
      </section>
    </Section>
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
    </div>
  )
}

export default Home
