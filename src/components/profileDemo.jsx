import React from 'react'
import './ProfileDemo.css';

export default function profileDemo() {
  return (
    <>
    <h1>Upload your images</h1>
    <form action="/upload" method='POST' encType='multipart/form-data'>
    <input type="file" name="images" id="imageBox" />
    <button type='submit' id='btn-upload'>Upload</button>

    </form>
    </>
  )
}
