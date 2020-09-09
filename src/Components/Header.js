import React, { Component } from 'react';

var bgimg = "https://source.unsplash.com/1600x900/?nature,water,monuments", bgimgL, bgset = false;

class Header extends Component {

   constructor(props) {
      super(props);
      this.state = { shuffelbg: false };
   }

   setBG = () => {
      if (bgimgL && bgset) {
         var header = document.querySelector("header");
         header.style.backgroundImage = `url(${bgimgL})`;
      }
   }

   componentDidMount() {
      fetch(bgimg)
         .then(response => response.blob())
         .then(images => {
            bgimgL = URL.createObjectURL(images)
            console.log({ bgimgL })
            this.setBG()
         })
      setTimeout(() => {
         // header.classList.add("shuffle-bg");
         // this.setState({
         //    ...this.state, shuffelbg: true
         // })
         bgset = true;
         this.setBG()
      }, 3000)
   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home" className={this.state.shuffelbg ? "shuffel-bg" : ""}>

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h2>Hey There, Myself</h2>
                  <h1 className="responsive-headline">{name}.</h1>
                  <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;