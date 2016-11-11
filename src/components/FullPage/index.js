import React, { PropTypes } from 'react';
import smallLogo from '../Footer/images/logo_v2.svg';
import smallLogoV2 from './small_v2.svg';
import logo from '../Header/images/full_logo.svg';
import LinkLabler from './LinkLabler';
import FontAwesome from 'react-fontawesome';


class FullPage extends React.Component {
  componentWillMount() {
    this.state = {
      // labelValue: "Navigation"
      labelValue: "my navigation"
    }
    this.updateLabel = this.updateLabel.bind(this);
  }
  updateLabel(e) {
    if (e.type === "mouseout"){
      this.setState({
        labelValue: 'my navigation'
      });
    } else {
      this.setState({
        labelValue: e.target.id
      });
    }
  }
  render() {
    return (
      <div className="centerPage">
        <div className="logoContainer">
          <object
            data={smallLogoV2}
            type="image/svg+xml"
            width="300px"
          />
        </div>
        <div className="iconLinks">
          <LinkLabler labelValue={this.state.labelValue} />
          <div className="noBorderPadding">
            <a href="https://goo.gl/XGvu4j">
              <FontAwesome
                className="icon-footer"
                name="folder"
                id="my resume"
                onMouseOver={this.updateLabel}
                onMouseOut={this.updateLabel}
              />
            </a>&nbsp;
            <a href="http://edpetner.deviantart.com/">
              <FontAwesome
                className="icon-footer"
                name="deviantart"
                id="my DeviantArt"
                onMouseOver={this.updateLabel}
                onMouseOut={this.updateLabel}
              />
            </a>&nbsp;
            <a href="https://github.com/edpetner">
              <FontAwesome
                className="icon-footer"
                name="github-square"
                id="my GitHub"
                onMouseOver={this.updateLabel}
                onMouseOut={this.updateLabel}
              />
            </a>&nbsp;
            <a href="https://www.linkedin.com/in/edwardpetner">
              <FontAwesome
                className="icon-footer"
                name="linkedin-square"
                id="my LinkedIn"
                onMouseOver={this.updateLabel}
                onMouseOut={this.updateLabel}
              />
            </a>
          </div>
        </div>
        <div className="story">
          <h4 className="story-title">Who am I?</h4>
          <p>
            &nbsp;Welcome to my personal page, over the next few days a number of new features and
            applications will be loaded here, until then, feel free to visit my GitHub. This website
            will be focused on providing access to my portfolio, but I will also be adding references
            to applications I build to experiment with various technologies and deploy (hopefully) helpful
            tools that other developers and consumers can use.
            <br />
            <br />
            &nbsp;I am a Freelance web developer currently looking for opprotunities to do full time
            development. I began programming when I was in my teens. In my early days I worked
            on a stack based around a PHP/MySQL. Today, I develop websites using Javascript to
            run my front-end. I have experience using NodeJS, Rails/Sinatra and Django to create
            robust APIs and back my applications with fast efficent data processing.
          </p>
          <div
            className="story-footer"
          >
            <a href="https://goo.gl/XGvu4j"><strong>download my resume</strong></a>
          </div>
        </div>
        <object
          data={logo}
          type="image/svg+xml"
          height="80px"
        />
      </div>
    );
  }
}

export default FullPage;
