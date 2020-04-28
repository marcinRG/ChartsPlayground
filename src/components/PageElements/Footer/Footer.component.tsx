import * as React from 'react';
import './Footer.component.scss';

export function FooterComponent() {
    return (
        <footer className="footer">
            <div className="content-wrapper">
                <h2 className="section-title">Get in touch</h2>
                <div className="contact-container">
                    <div className="contact email">
                        <h3>Email</h3>
                        <p>free@psdfreebies.com</p>
                    </div>
                    <div className="contact phone">
                        <h3>Phone</h3>
                        <p>+123 456 789</p>
                    </div>
                    <div className="contact address">
                        <h3>Address</h3>
                        <p>
                            123, Main Road, New City, My Country 123456
                        </p>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.vk.com/" className="link-social vk"></a>
                    <a href="https://www.facebook.com/" className="link-social facebook"></a>
                    <a href="https://www.google.com/" className="link-social google-plus"></a>
                    <a href="https://www.digg.com/" className="link-social digg"></a>
                    <a href="https://www.youtube.com/" className="link-social youtube"></a>
                    <a href="https://www.linkedin.com/" className="link-social linkedin"></a>
                </div>
                <div className="copyright-info">Copyright © 2017. PSDFreebies.com  | Best PSD Template for free</div>
            </div>
        </footer>
    );
}
