import React, {useRef, useEffect, useState} from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { FaLongArrowAltLeft,FaMinus,FaPlus } from 'react-icons/fa';

import { errorSelector, successSelector } from '../shared/selectors';
import {getTownshipList, requestSignUp, SIGN_UP} from '../reducer/auth';
import {ErrorMessageHandler} from "../components/ErrorMessageHandler";
import usePrevious from "../hooks/usePrevious";

function Register(props) {
    return(
      <div className="wrap">
          <div className="container">
              <div className="login">
                  <div className="dashboard">
                      <div className="menu text-center position-relative">
                        <p className="m-lf">
                            <div className="m-la fa-i-cursor" style={{ cursor: 'pointer' }}>
                                <Link to="/login" className="icon" value="login"><FaLongArrowAltLeft/></Link>
                            </div>
                          <span>Register</span>
                        </p>
                      </div>
                  </div>
                  <div className="form">
                      <ErrorMessageHandler error={props.error || validationError}/>
                      <input type="text" name="" placeholder="Name" ref={nameInput} required="" />
                      <input type="email" name="" placeholder="Email" ref={emailInput} required="" />
                      <input type="phone" name="" placeholder="Phone" ref={phoneInput} required="" />
                      <input type="text" name="" placeholder="Deliver Address" ref={addressInput} required="" />
                      <input type="text" name="" placeholder="Shop Name" ref={shopInput} required="" />
                      <label className="d-flex align-items-center register-select-box">
                          <span>Postal Code -</span>
                          <select onChange={handleChange} className="mx-3">
                              {props.townshipList.map((item, idx) => (
                                <option value={item.postalCode} selected={idx === 0}>{item.township}</option>
                              ))}
                          </select>
                          <span>{postalCode}</span>
                      </label>
                      <input type="password" name="" placeholder="Password" ref={pwdInput} required="" />
                      <input type="password" name="" placeholder="Confirm Password" ref={confirmPwdInput} required=""/>
                      <button className="btn-com mt-4" onClick={handleSubmit} disabled={loading}>
                          { loading ? 'SUBMITTING' : 'SUBMIT' }
                      </button>
                  </div>
              </div>
          </div>
      </div>
    );
}

const mapStateToProps = store => (
  {
      loading: successSelector(store.loading, SIGN_UP),
      error: errorSelector(store.error, SIGN_UP),
      success: successSelector(store.success, SIGN_UP),
      townshipList: store.auth.get_townships,
      auth: store.auth,
  }
);

export default connect(mapStateToProps, {
    requestSignUp,
    getTownshipList
})(Register);
