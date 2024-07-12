import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Store/Context';
import { db, storage } from '../../Firebase/config';

const Create = () => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('');
  const [image, setImage] = useState([]);
  const navigate = useNavigate()
  const date = new Date();

  const {user} = useContext(AuthContext)

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log({name, category, price, image});

    storage.ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        db.collection('products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
      })
    })
    navigate('/')
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"

              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"

              value={category}
              onChange={(e)=> setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            id="fname" 
            name="Price" 

            value={price}
            onChange={(e)=> setPrice(e.target.value)  }
            />
            <br />
          </form>
          <br />
          <img 
          alt="Posts" 
          width="200px" 
          height="200px" 
          src={image ? URL.createObjectURL(new Blob([image], {type:'jpg'})) : ''} ></img>
          <form>
            <br />
            <input 
            type="file"
            onChange={(e)=> setImage(e.target.files[0])}
            />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
