import { useState, useEffect, createRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { createPortal } from 'react-dom';

import s from './App.module.css';
import api from './API/api.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button.jsx';
import Load from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal.jsx';

const myRef = createRef();
let debounce = require('lodash.debounce');

function App() {
  const [valueSubmit, setValueSubmit] = useState('');
  const [dataFetch, setDataFetch] = useState([]);
  const [page, setPage] = useState(1);
  const [flagLoad, setFlagLoad] = useState(false);
  const [fullHd, setFullHd] = useState('');

  const scrollList = () => {
    let forwardBack;
    const resolution = myRef.current;
    switch (resolution) {
      case 'HD':
        forwardBack = 1080;
        break;
      case 'fullHD':
        forwardBack = 1150;
        break;
      case '4k':
        forwardBack = 1520;
        break;

      default:
        break;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight - forwardBack,
      behavior: 'smooth',
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const searchInputDom = document.getElementById('input-searchBar');
    const searchWord = searchInputDom.value.toLowerCase().replace(/\s/g, '');
    if (valueSubmit === searchWord && dataFetch.length > 0)
      return toast.warn('⚠️ Change request!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    try {
      setFlagLoad(true);
      await api.getFullRequest(searchWord, page).then(({ hits, totalHits }) => {
        if (totalHits === 0) throw new Error('Wrong request');
        setDataFetch(hits);
        setValueSubmit(searchWord);
        scrollList();
        searchWord === '' &&
          toast.warn('⚠️ Default page!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
    } catch (err) {
      searchInputDom.value = '';
      setValueSubmit('');
      toast.error(
        `🚀 ${
          err.message === 'Wrong request' ? 'Wrong request' : 'Server error'
        }!`,
        {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    } finally {
      setFlagLoad(false);
    }
  };

  const renderLazyAndButton = async () => {
    const changePage = page + 1;
    try {
      setFlagLoad(true);
      await api.getFullRequest(valueSubmit, changePage + 1).then(({ hits }) => {
        if (hits.length === 0)
          return toast.warn('⚠️ The last page!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        setDataFetch([...dataFetch, ...hits]);
        scrollList();
      });
    } catch (err) {
      toast.error('🚀 Server error!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setFlagLoad(false);
      setPage(changePage);
    }
  };

  useEffect(() => {
    const widthScr = window.screen.width;
    switch (widthScr) {
      case 2560:
        myRef.current = '4k';
        break;
      case 1920:
        myRef.current = 'fullHD';
        break;
      case 1600:
        myRef.current = 'HD';
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    function handleScrollRoot() {
      const rootDiv = document.getElementById('root');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      let forwardBack;
      const resolution = myRef.current;
      switch (resolution) {
        case 'HD':
          forwardBack = 900;
          break;
        case 'fullHD':
          forwardBack = 965;
          break;
        case '4k':
          forwardBack = 1325;
          break;
        default:
          break;
      }
      const observer = new IntersectionObserver(async () => {
        const scrolled = window.scrollY;
        const viewPortHeight = rootDiv.clientHeight;
        const different = viewPortHeight - Math.round(scrolled) - forwardBack;
        if (different !== 0) return;
        renderLazyAndButton();
      }, options);
      observer.observe(rootDiv);
    }

    const debouncedHandleScrollRoot = debounce(() => handleScrollRoot(), 1000);
    window.addEventListener('scroll', debouncedHandleScrollRoot);
    return () =>
      window.removeEventListener('scroll', debouncedHandleScrollRoot);
  });

  const handleLoadButton = async () => await renderLazyAndButton();

  const handleListenerForList = e =>
    e.target.tagName === 'IMG' && setFullHd(e.target.alt);

  const handleListenerForCloseModalClick = e =>
    e.target.tagName !== 'IMG' && setFullHd('');

  const handleListenerForCloseModalKeydown = e =>
    e.code === 'Escape' && setFullHd('');

  const modalRef = document.querySelector('#root__modal');

  return (
    <div>
      <Load domLoad={true} duration={500} />
      <Searchbar submitForm={e => handleSubmit(e)} />
      {fullHd !== '' &&
        createPortal(
          <Modal
            src={fullHd}
            closeModalClick={handleListenerForCloseModalClick}
            closeModalEsc={handleListenerForCloseModalKeydown}
          />,
          modalRef,
        )}
      <div className={s.wrapper__gallery}>
        <ImageGallery dataFetch={dataFetch} onClickList={handleListenerForList} />
        {dataFetch.length > 0 && <Button loadMore={handleLoadButton} />}
        {flagLoad && <Load />}
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
