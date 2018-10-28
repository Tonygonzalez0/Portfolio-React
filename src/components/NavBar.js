import React from 'react';


const NavBar = (props) =>{

    // window.onscroll = () => {
    //     let nav = document.getElementById('main--container__style');
    //     let topPos = nav.offsetTop;
    //     console.log(topPos); 
    //   };

    return(
        <div className="row__content">
            <header>
                <nav>
                    <div>
                        <ul>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Contact Me</li>
                        </ul>
                    </div>
                </nav>

                <nav id= "main--container__style" onScroll={(event)=>this.handleNavScroll(event)}> 
                    <a href="/"><img src={require("../Assets/Tonys_Logo_TW.png")} alt="main-logo" className="main--img__style"/></a> 
                    <i className="fas fa-bars" onClick={()=> props.handletoggleNavMenu()}></i>   
                        { props.toggleNavMenuStatus === true &&
                        <ul className="main--items__style">
                            <span className="close--stlye" onClick={()=>props.handletoggleNavMenu()}>&times;</span>
                            <li ><a href="#project--tag" className="item--link__style">Projects</a></li>
                            <li ><a href="/" className="item--link__style">About Me</a></li>
                            <li ><a href="/" className="item--link__style">Skills</a></li>
                            <li ><a href="/" className="item--link__style">Contact Me</a></li>
                        </ul>
                        }
                </nav>
            </header> 
        </div>
    )
};

export default NavBar;