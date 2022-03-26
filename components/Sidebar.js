import { useState } from 'react'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import {
  RiFile2Fill,
  RiFileList2Fill,
  RiHome7Fill,
  RiHome7Line,
} from 'react-icons/ri'
import { HiMail, HiOutlineMail } from 'react-icons/hi'
import { FaBell, FaHashtag, FaRegListAlt } from 'react-icons/fa'
import { BiHash } from 'react-icons/bi'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

import { CgMore } from 'react-icons/cg'
import SidebarOption from './SIdebarOption'

const style = {
  wrapper: `flex-[.7] px-8 flex flex-col`,
  twtIconContainer: `text-3xl m-4`,
  twtButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold  rounded-3xl h-[50px] mt-[20px] cursor:pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover`,
  profileImage: `height-12 w-12 rounded-full`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileRight: `flex-1 flex `,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

export default function Sidebar({ initialSelectedIcon = 'Home' }) {
  const [selected, setSelected] = useState(initialSelectedIcon)

  return (
    <div className={style.wrapper}>
      <div className={style.twtIconContainer}>
        <VscTwitter />
      </div>

      <SidebarOption
        Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
        text="Home"
        isActive={Boolean(selected === 'Home')}
        setSelected={setSelected}
        redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Explore' ? FaHashtag : BiHash}
        text="Explore"
        isActive={Boolean(selected === 'Explore')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Notification' ? FaBell : FiBell}
        text="Notification"
        isActive={Boolean(selected === 'Notification')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Message' ? HiMail : HiOutlineMail}
        text="Message"
        isActive={Boolean(selected === 'Message')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
        text="Bookmarks"
        isActive={Boolean(selected === 'Bookmarks')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
        text="Lists"
        isActive={Boolean(selected === 'Lists')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
        text="Profile"
        isActive={Boolean(selected === 'Profile')}
        setSelected={setSelected}
        // redirect={'/'}
      />
      <SidebarOption
        Icon={CgMore}
        text="More"
        setSelected={setSelected}

        // redirect={'/'}
      />

      <div className={style.twtButton}>mint</div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}></div>
        <div className={style.details}>
          <div className={style.name}>Vaibhav</div>
          <div className={style.handle}>@vai...3445</div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}
