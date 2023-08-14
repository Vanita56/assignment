import './App.css';

function Header() {
  return (
<header>
    <div className="head">
    <div className="cont">
<div className="container">

<div className="row">
    <div className="col-1">
        <p>Backlog</p>
    
    </div>
    <div className="col-2">
        <p>Todo</p>

    </div>
    <div className="col-3">
        <p>In Progress</p>
    </div>
    <div className="col-4">
    <p><i class="ti ti-circle-check-filled"></i> Done</p>
    </div>
    <div className="col-5">
        <p>Cancelled</p>
    </div>

</div>
</div></div>
    </div>
</header>
  )
  }
  export default Header