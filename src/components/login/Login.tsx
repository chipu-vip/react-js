import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as React from "react";

export class Login extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
              <a href="" className="btn btn-block btn-twitter">
                <FontAwesomeIcon icon={faTwitter} />  Login via Twitter
              </a>
              <a href="" className="btn btn-block btn-facebook">
                <FontAwesomeIcon icon={faFacebook} />  Login via facebook
              </a>
            </p>
            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="User password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    );
  }
}
