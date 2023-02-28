import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'



const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/52565833_2285405871748774_3065617363756908544_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Md_GdDplf7wAX-q-IHd&tn=GxCA47GZQp3wZ0Df&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCbasDIxTYnF-4EC3oqrW4rM3XOZwYRUhDW6SFVIZAlvA&oe=64258947" alt=""></img>
        <div className="user">
          <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/326470334_904941923874126_3729276454098923917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ajN9hKDc8toAX_VyjBk&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCeVn_5SFbiDmHmGtOLImZJQp6zj3OMdcai52aAL_RQjg&oe=64033BD4" alt=""></img>
          <div className="info">
            <span>Dat</span>
            <p>Posted 1 year ago</p>
          </div>
          <div className='edit'> 
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""></img>
            </Link>
            <img src={Delete} alt=""></img>
          </div>
        </div>
        <h1> Lorem Ipsum is simply dummy text of the printing</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/>
        <br/>
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        <br/>
        <br/>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        <br/>
        <br/>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single