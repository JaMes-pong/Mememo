import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import BGImages from "../images/bg.png";
import TypeAnimation from 'react-type-animation';

function homepage() {
  return (
    <div>
        <div className="landing-page-image">
            {/* <img src={BGImages} class="img-fluid" alt="..."></img> */}
        </div>
        <div className="landing-page-h1">
                <h1>Write down and remember it</h1>
                <h1>- MeMemo</h1>
            </div>
        <div className="container">
            <div class="landing-page-content">
                <h1>Write down everything that are important to you.</h1>
                <p>MeMemo is a great tool for you!<br></br>You can write down anything that you want to remember.</p>
                  <div class="row">
                      <div class="col-sm">
                        <div class="card">
                            <div class="card-header">
                                Easy to use!
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Write down</h5>
                                <p class="card-text">Any important</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-sm">
                        <div class="card">
                            <div class="card-header">
                                Quick and quick!
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Note it</h5>
                                <p class="card-text">Any don't want to forget</p>
                            </div>
                        </div>
                      </div>
                  </div>
            </div>
            <div class="landing-page-content-1">
                <h1>Write it and don't forget it anymore.</h1>
                <p>Reduce the "storage" of your brain! XD</p>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card" id="memo">
                            <div class="card-header" id="memo_header">
                                Memo
                            </div>
                            <div class="card-body" id="memo_body">
                                <blockquote class="blockquote mb-0">
                                    <p>Meeting 12:30pm</p>
                                    <footer class="blockquote-footer">Lilia</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div class="card" id="memo">
                            <div class="card-header" id="memo_header">
                                Memo
                            </div>
                            <div class="card-body" id="memo_body">
                                <blockquote class="blockquote mb-0">
                                    <p>Lunch with James</p>
                                    <footer class="blockquote-footer">Frank</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card" id="memo">
                            <div class="card-header" id="memo_header">
                                Memo
                            </div>
                            <div class="card-body" id="memo_body">
                                <blockquote class="blockquote mb-0">
                                    <p>Writing Assignment</p>
                                    <footer class="blockquote-footer">James</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div class="card" id="memo">
                            <div class="card-header" id="memo_header">
                                Memo
                            </div>
                            <div class="card-body" id="memo_body">
                                <blockquote class="blockquote mb-0">
                                    <p>Debug - Mememo</p>
                                    <footer class="blockquote-footer">Pong</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>Simple and Clear design.</h1>
                        <p>Clean layout, easy to use, easy to read.</p>
                    </div>
                </div>
            </div>
            <div class="landing-page-content-1">
                <h1>Easy to use.</h1>
                <p>We provide convenience, not task.</p>
                <div class="card" id="memo_show">
                    <div class="card-header" id="memo_header">
                        Memo
                    </div>
                    <div class="card-body" id="memo_body">
                        <blockquote class="blockquote mb-0">
                            <TypeAnimation cursor={true} repeat={Infinity} sequence={['Just type anything on Mememo, save it, read it, and you will remember it!', 5000, '']} wrapper="p" />
                                <footer class="blockquote-footer">James</footer>
                            </blockquote>
                        </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 id="logo">Mememo</h1>
                        <p>mememotools.netlify.app</p>
                    </div>
                    <div class="col">
                        <h1>Find Us</h1>
                        <p>If you would like to know more about Mememo, let's chat!</p>
                        <div class="card" id="memo_show">
                            <div class="card-header" id="memo_header">
                                Memo
                            </div>
                            <div class="card-body" id="memo_body">
                            <blockquote class="blockquote mb-0">
                                <p id="memo_p">Say Hello to me!<br></br><a href="mailto:mememo_hk@gmail.com">mememotools.hk@gmail.com</a></p>
                                <footer class="blockquote-footer">James</footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <p id="last">Copyright 2022, Mememo. All rights reserved.</p>
            </div> 
        </div>
    </div>
  );
}

export default homepage;