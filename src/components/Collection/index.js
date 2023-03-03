import React from "react";
import collectionImg from './collection-img.png'
import "./index.scss";

function Collection() {

  return (
    <div className="collection">
      <div className="collection-container">
        <div className="collection-about">
          <h1 className="collection-title">Lorem ipsum</h1>
          <p className="collection-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <div className="collection-img">
          <img src={collectionImg} alt="Banner Colecao" />
        </div>
      </div>
    </div>
  );
}

export default Collection;
