import React from 'react';
import FontAwesome from 'react-fontawesome';

const Content = () => {
  return (
    <div
      className="content"
    >
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
      <div className="vert-split">
        <div className="story-column-left">
          <div className="story">
            <h4 className="story-title">Technologies</h4>
              <strong>Languages</strong>
              <ul>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>Python</li>
              </ul>
              <strong>Frameworks</strong>
              <ul>
                <li>React/Redux</li>
                <li>Angular</li>
                <li>Sinatra</li>
                <li>Rails</li>
                <li>Django</li>
              </ul>
              <strong>Data Stores</strong>
              <ul>
                <li>MySQL</li>
                <li>pSQL</li>
                <li>MongoDB</li>
                <li>Redis Cache</li>
              </ul>
          </div>
        </div>
        <div className="story-column-right">
          <div className="story">
            <h4
              className="story-title"
            >
              Experience
            </h4>
            <ul>
              <li>
                <strong>Theatre Galleria</strong>
                <ul>
                  <li>Lead Developer - New York, NY</li>
                  <li>Participated in NYU Summer Launchpad</li>
                  <li>Built out schema for new e-commerce platform</li>
                </ul>
              </li>
              <li>
                <strong>Go Untethered/strong>
                <ul>
                  <li>Freelance Developer - New York, NY</li>
                  <li>Built Rails API for subscription travel program</li>
                  <li>Designed front-end interface using Flexbox & SASS</li>
                </ul>
              </li>
              <li>
                <strong>General Assembly</strong>
                <ul>
                  <li>Code Mentor - New York, NY</li>
                  <li>Provided comprehensive code reviews for students</li>
                  <li>Reviewed student work and provided assitance on projects</li>
                  <li>Lead bonus lessons for students</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
