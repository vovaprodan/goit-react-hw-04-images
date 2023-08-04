import { Component } from "react";
import { ImageGallery } from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '../Button/Button';
import api from '../api'
import { BallTriangle } from  'react-loader-spinner'

class Api extends Component {
    state = {
        pictureNew: [],
        loading: false,  
      showModal: false, 
      page: 1,
      url: null,
      query: ''
  }
onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (e.currentTarget.name.value.trim() === '') {
      toast.error("Поле пусте");
      return
    }
    this.setState({
      query: e.currentTarget.name.value,
      page: 1,
      pictureNew: [],
    })
    form.reset();
  }
  
  onClickButton = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  toggleModal = largeImageURL => {
    
    this.setState(({showModal})=> ({
      showModal: !showModal,
      url: largeImageURL,
    }))
  }

  async componentDidUpdate(prevProp, prevState) {
       const { query, pictureNew, page } = this.state;
        if (prevState.query !== this.state.query) {
          this.setState({ loading: true, pictureNew: [] })
          
            api.fetchApiPicture(query,page).then(respon => this.setState({ pictureNew: respon.hits }))
                .finally(() => this.setState({loading:false}))

                
    }
    if (prevState.page !== this.state.page 
    ) {
      api.fetchApiPicture(query, page).then(respon => {
        console.log(respon)
        this.setState({
            pictureNew: [...pictureNew, ...respon.hits],
          });
         
       }
      )
        }
  }
  


    render() {
        const { pictureNew, loading, showModal } = this.state;
      return <div>
           <Searchbar onSubmit={this.onSubmitForm} />
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
         
          <ImageGallery onToggle={this.toggleModal} pictureNew={pictureNew} showModal={showModal} />
           {showModal && <Modal onClose={this.toggleModal} url= {this.state.url}  /> }
          
          {pictureNew.length > 0 && <Button onClickButton={this.onClickButton} /> }
            <ToastContainer />
        </div>
    }
}

export default Api;