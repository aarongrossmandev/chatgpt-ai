'use client'
import { useEffect } from "react";
import { themeChange } from "theme-change";

function ThemeChanger() {
  const themeValues = [
    "Light",
    "Dark",
    "Blueberry",
    "Aqua",
    "Forest",
    "Cherry",
    "Grape",
    "Halloween",
  ]

  useEffect(() => {
    themeChange(false)
  });


  return (
    <div className="flex flex-col justify-center items-center border-t border-primary-border">
      <div className="mb-2 text-center justify-center items-center mx-auto mt-2">
        <h2 className="text-lg">Select Your Theme</h2>
      </div>
      <select className="bg-primary-bg border-2 mb-4 border-primary-border outline-none ring-0 md:w-1/2 w-full" data-choose-theme>
        <option className="text-primary-text" value="">Default</option>
        {themeValues.map((value) => (
          <option className="text-primary-text flex" key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ThemeChanger