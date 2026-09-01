function Header() {
  return (
    <div className="heading" >
      <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png?w=1024" />
    
      <div className="options">
        <button className="btn">MEN</button>
        <button className="btn">WOMEN</button>
        <button className="btn">KIDS</button>
        <button className="btn">HOME AND LIVING</button>
        <button className="btn">BEAUTY</button>
        <button className="btn">STUDIO</button>
      </div>
      <input className="search" type="text" placeholder="Search for products, brands and more" />
      <div className="last-btns">
        <div className="logo-btn">
          <button className="btn-2">
            <svg  class="btn-icon"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#212121"/>
          </svg>
            Profile
          </button>
        </div>
        <div className="logo-btn">
          <button className="btn-2">
             <svg viewBox="0 0 24 24" class="btn-icon">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            Wishlist
          </button>
        </div>
        <div className="logo-btn">
          <button className="btn-2">
            <svg className="btn-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7V6a5 5 0 0 1 10 0v1h2l1 14H4L5 7h2Zm2 0h6V6a3 3 0 0 0-6 0v1Z"
                  fill="#212121"
                />
              </svg>
            Bag
          </button>
        </div> 
      </div>
      



   
    </div>

  )

}

export default Header;