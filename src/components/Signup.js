import React from 'react';
import "./Signup.scss"

const Signup = () => {

return (
       <div className='form__content-right'>
           <form className="form">
               <h1>Let's change the world!</h1>
               <div className="form__inputs">
                   <label
                       className="form__input--label"
                       htmlFor="email"
                   >
                       <input
                       type="email"
                       name="email"
                       className="form__input"
                       placeholder="Email"
                       />
                   </label>
                   <div className="form__inputs">
                   <label
                       className="form__input--label"
                       htmlFor="password"
                   >
                       <input
                           type="password"
                           name="password"
                           className="form__input"
                           placeholder="Password"
                       />
                   </label>
                   </div>
                   <div className="form__inputs">
                   <label
                       className="form__input--label"
                       htmlFor="first-name"
                   >
                       <input
                           type="text"
                           name="first-name"
                           className="form__input"
                           placeholder="First name"
                       />
                   </label>
                   </div>

                   <div className="form__inputs">
                       <label
                           className="form__input--label"
                           htmlFor="last-name"
                       >
                           <input
                               type="text"
                               name="last-name"
                               className="form__input"
                               placeholder="Last name"
                           />
                       </label>
                   </div>

                   <div className="form__inputs">
                       <label
                           className="form__input--label"
                           htmlFor="iban"
                       >
                           <input
                               type="text"
                               name="iban"
                               className="form__input"
                               placeholder="iBan"
                           />
                       </label>
                   </div>
               </div>

               <button type ="submit" className="form__input--btn">
                   Sign up
               </button>
               <span className="form__input--login">
                   Already have an account? <a href="#">here</a>
               </span>

           </form>
       </div>
    );
}

export default Signup;

