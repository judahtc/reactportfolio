export default function NavBar(){
    const me="{JC}"
    return (
        <div className="navbar">
<div className="bg-gray-600  text-white flex items-center justify-between py-3 px-24 w-full">
<div className="font-bold text-2xl">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="40" height="40">
  <defs>

    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.3)" />
    </filter>
  </defs>


  <circle cx="100" cy="100" r="95" fill="url(#gradient)" filter="url(#shadow)" />


  <circle cx="100" cy="100" r="85" fill="none" stroke="#ffffff" stroke-width="6" />


  <text
    x="50%"
    y="50%"
    text-anchor="middle"
    dominant-baseline="central"
    font-family="Arial, sans-serif"
    font-size="64"
    font-weight="bold"
    fill="#ffffff"
  >
    {me}
  </text>
</svg>

</div>

<div className="nav-items space-x-5 font-bold text">
    <span>Home</span>

    <span>Blog</span>
    <span>Projects</span>
    <span>Contact</span>
   
</div>

</div>
        </div>
    )

}