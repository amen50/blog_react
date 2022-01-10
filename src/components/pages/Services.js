import React from 'react'
import '../../App.css';
import './NewBlog.css';
import img8 from '../../images/img-home.jpg';

export default function Serivices()
{
    return(
        <div className='write'>
             <img
        className="writeImg"
        src={img8}        alt=""
      />
          <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>  
        </div>
    )
}