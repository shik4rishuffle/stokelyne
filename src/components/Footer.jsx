import React, {Component} from "react";

class Footer extends Component {
	render() {
		return (
			<section id="footer" className="footer-component">
				<div className="contact">
					<div className="contact-left">
						<h3>Get in touch</h3>
						<div className="contact-form">
							<form>
								<div className="form-group">
									<input className="contact-form__name" placeholder="Name"></input>
									<input className="contact-form__email" placeholder="Email"></input>
								</div>
								<input className="contact-form__subject" placeholder="Subject"></input>
								<textarea className="contact-form__body" placeholder="Message"></textarea>
							</form>
						</div>
					</div>
					<div className="contact-right">
						<h3>
                            Come find us
						</h3>
						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39342.29088210565!2d-1.2191874434414014!3d51.95413935590053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876de1382d97ccb%3A0xc7fa8ac11ee480c7!2sStoke%20Lyne%2C%20Bicester!5e0!3m2!1sen!2suk!4v1651854066132!5m2!1sen!2suk"
								loading="lazy"></iframe>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;
