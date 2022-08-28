import React from 'react'

const Home = () => {

const handleSubmit = e => {
    e.preventDefault()
   console.log(e.target.name.value.trim())
}

  return (
    <div className='card-container'>
      <div className='card'>     
        <h1>Hi Trainer!</h1>          
        <div className='card-img'>
        <img src="https://th.bing.com/th/id/OIP.Oes4gpQqy04-3kMmek_84wHaOZ?pid=ImgDet&w=900&h=1750&rs=1" alt="" />          
        </div>
        <p>Give me your name to start</p>
        <form className='card__form' onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button className='card__btn'>Catch them all</button>
        </form>
      </div>
      <footer className='card__footer'>
        <div className='img__footer'>         
        </div>
      </footer>
    </div>
  )
}

export default Home