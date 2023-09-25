import { menuItems } from "./menuItems"

type MenuProps = {
    style: string
}

export const Menu = ({style}:MenuProps) => (
    <ul className={style}>
    {menuItems.map((item) => (
      <li className="m-2 text-gray-200 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <a href="#" className="hover:text-white">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
)