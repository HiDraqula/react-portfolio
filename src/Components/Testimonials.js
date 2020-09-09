import React, { Component } from 'react';

class Testimonials extends Component {
   constructor(props) {
      super(props);
      this.state = { shuffelbg: false };
   }
   componentDidMount() {
      // var header = document.querySelector("header");
      setTimeout(() => {
         // header.classList.add("shuffle-bg");
         this.setState({
            ...this.state, shuffelbg: true
         })
      }, 4500)
   }
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials" className={this.state.shuffelbg ? "shuffel-bg" : ""} >
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
