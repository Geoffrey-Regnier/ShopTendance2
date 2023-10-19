import React, { useRef } from 'react'
import { addProducts, getProducts } from '../Actions/products.action'
import { useDispatch } from 'react-redux';

const Formulaire = () => {
  const form = useRef()
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      imageUrl: form.current.imageUrl.value,
      title: form.current.title.value,
      description: form.current.description.value,
      categories: form.current.categories.value,
      basePrice: form.current.basePrice.value,
      salePrice: form.current.salePrice.value,
    }
    
    await dispatch(addProducts(postData));
    dispatch(getProducts());
    form.current.reset();
  }

  
  return (
    <div className='formulaire'>
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <h2>Ajouter un article</h2>
        <div>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea type="textarea" name="description" id="description" className='description' />
        </div>
        <div>
          <label htmlFor="categories">Categories</label>
          <input type="text" name="categories" id="categories" />
        </div>
        <div>
          <label htmlFor="basePrice">Prix de base</label>
          <input type="number" name="basePrice" id="basePrice" step={'0.01'}/>
        </div>
        <div>
          <label htmlFor="salePrice">Prix soldé</label>
          <input type="number" name="salePrice" id="salePrice" step={'0.01'}/>
        </div>
        <div>
          <label htmlFor="imageUrl">Image</label>
          <input type="url" name="imageUrl" id="imageUrl" />
        </div>
        <button type="submit" className='submitBtn'>Envoyer</button>
      </form>
    </div>
  )
  
};


export default Formulaire