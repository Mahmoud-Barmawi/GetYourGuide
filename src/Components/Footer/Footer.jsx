import React from 'react'
import './FooterStyle.css'
export default function Footer() {
    return (
        <>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Get Your Guide</h3>
                                    <p>Dont miss any updates of our new Trips.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" >
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: 'none' }} />
                                        <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="https://play.google.com/store/apps/details?id=com.getyourguide.android&referrer=adjust_reftag%3DcyO8YE286bdHs%26utm_source%3DGetYourGuide%26utm_campaign%3Dweb_to_app%26utm_content%3Dfooter_sitewide%26utm_term%3Dbottom_cta_desktop" target='_blank'>Android App</a></li>
                                        <li><a href="https://apps.apple.com/app/id705079381" target='_blank'>IOS App</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook" />
                                        <a href="#" className="fab fa-twitter" />
                                        <a href="#" className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one" />
                        <div className="footer_bg_two" />
                    </div>
                </div>

            </footer>

        </>
    )
}


