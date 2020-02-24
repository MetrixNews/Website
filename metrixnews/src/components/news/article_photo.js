import React, { PureComponent } from 'react';
import './newsfeed.scss'
 
export default class ArticlePhoto extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      const config = {
        root: null,
        rootMargin: '50%',
      }

        this.observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                const { isIntersecting } = entry;
                if (isIntersecting) {
                  this.element.src = this.props.photo;
                  this.observer = this.observer.disconnect();
                }
              });
            },
            {
              root: document.querySelector(".container")
            },
            config
          );
          this.observer.observe(this.element);
    }

    render() {
      return (
        <img className="articlephoto" ref={el => this.element = el} />
    )
}
}