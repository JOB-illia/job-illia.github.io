import React from 'react';
import style from './PhotoAlbum.module.css'
import { Container } from "react-bootstrap";
import photo1 from '../../assets/img/fotoFromWork/fotoFromWork1.jpg'
import photo2 from '../../assets/img/fotoFromWork/fotoFromWork2.jpg'
import photo3 from '../../assets/img/fotoFromWork/fotoFromWork3.jpg'
import photo4 from '../../assets/img/fotoFromWork/fotoFromWork4.jpg'
import photo5 from '../../assets/img/fotoFromWork/fotoFromWork5.jpg'
import photo6 from '../../assets/img/fotoFromWork/fotoFromWork6.jpg'

const PhotoAlbum = () => {
  return (
    <div>
      <Container>
        <div className={style.workPhotoAlbumContainer}>
          
          <div className={style.workPhotoAlbumImg}>
            <img src={photo1} alt="photos1"/>
          </div>
          <div className={style.workPhotoAlbumImg}>
            <img src={photo2} alt="photos2"/>
          </div>
          
          <div className={style.workPhotoAlbumImg}>
            <img src={photo3} alt="photos4"/>
          </div>
          
          <div className={style.workPhotoAlbumImg}>
            <img src={photo4} alt="photos4"/>
          </div>
          
          <div className={style.workPhotoAlbumImg}>
            <img src={photo5} alt="photos5"/>
          </div>
          <div className={style.workPhotoAlbumImg}>
            <img src={photo6} alt="photos6"/>
          </div>
          
        </div>
  
        <a className={style.photoFromWorkBtn} href="https://www.instagram.com/pdr_zbarazh/" target='blank'>Більше фото у нас на imstagram сторінці</a>
      </Container>
    </div>
  );
};

export default PhotoAlbum;