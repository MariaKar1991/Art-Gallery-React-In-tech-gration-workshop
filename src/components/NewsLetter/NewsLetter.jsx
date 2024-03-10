import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsLetter">
      <p className="newsLetter-header">Sign up to our Newsletter</p>
      <p className="newsLetter-paragraph">
        By signing up you agree to receive weekly email updates including
        special offers, free art fair tickets, free private views, and the
        latest art exhibition news. If you would like to, you can unsubscribe at
        any time.
      </p>
      <form className="subscription-form">
        <div className="input-group">
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="email address"
            name="email"
            required
          />
          <button type="submit" className="btn">
            SING UP
          </button>
        </div>
      </form>
    </div>
  );
}
