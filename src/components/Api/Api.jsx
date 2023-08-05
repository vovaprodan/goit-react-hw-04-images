import { useState, useEffect } from "react";
import { ImageGallery } from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '../Button/Button';
import api from '../api'
import { BallTriangle } from  'react-loader-spinner'

const Api = () => {
  const [pictureNew, setPictureNew] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);
  const [query, seQuery] = useState('');
  const [error, setError] = useState(null);

  //   state = {
  //       pictureNew: [],
  //       loading: false,  
  //     showModal: false, 
  //     page: 1,
  //     url: null,
  //     query: ''
  // }
 const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (e.currentTarget.name.value.trim() === '') {
      toast.error("Поле пусте");
      return
   }
   seQuery(e.currentTarget.name.value)
   setPage(1)
   setPictureNew([])
    form.reset();
  }
  
  const onClickButton = e => {
   setPage(page + 1)
  }

  const toggleModal = largeImageURL => {
    setShowModal( showModal  =>
      showModal= !showModal
    )
   setUrl(largeImageURL)
  }

  useEffect(() => {
     if(query ==='') {return}
    setLoading(true)
    api.fetchApiPicture(query, page).then(respon => {
      setPictureNew(prevPictureNew => [...prevPictureNew, ...respon.hits])
      
    })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))

  }, [query,page]);

  return <>
    
    <Searchbar onSubmit={onSubmitForm} />
    {error && <h1>Всьо пропало!!!</h1>}
    
         
    <ImageGallery onToggle={toggleModal} pictureNew={pictureNew} showModal={showModal} />
    {loading && <div><BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
          /></div>}
           {showModal && <Modal onClose={toggleModal} url= {url}  /> }
          
          {pictureNew.length > 0 && <Button onClickButton={onClickButton} /> }
            <ToastContainer />
        </>
    }
export default Api;