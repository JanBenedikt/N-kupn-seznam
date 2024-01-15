import './App.css';
import React, { useState } from 'react';

function App () {
  return(
   <div className='div'>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
  <form action="">
  <input type="image"  src="co.png" class="flag"/>
  <input type="image" src="nwm.png" class="flag"/>
</form>
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
    <label class="switch">
   <input type="checkbox"/>
  <span class="slider round"></span>
</label>
    </form>
  </div>
</nav>

<h1>Seznamy</h1>
<div class='buttons  d-grid gap-3 col-2 mx-auto'>
<button type="button" class="btn btn-primary">Zobrazit Všechny</button>
<button type="button" class="btn btn-secondary">Vytvořit nový seznam</button>
</div>

<div class="container">

</div>
<div class="card">
            <div class="card-body">
              <h3 class="card-title">Potraviny</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Potraviny">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Drogerie</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Potraviny">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Textil</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Potraviny">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div>
            </div>
          </div>
 
 
   </div> 
  
   )
  }

export default App;