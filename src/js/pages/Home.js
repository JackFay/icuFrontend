import React from "react";


export default class Home extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;


    return (
        <div class="MainContent">
        <section class="FirstSection">
            <h1 class="IntroHeading">Advanced Home Security</h1>
            <h4 class="IntroSlogan">For Peace of Mind</h4>
            <div class="MarketingContainer">
                <div class="Marketing">
                    <div class="MarketingPic Pic1"></div>
                    <div class="MarketingHeading">Proffesional Installation</div>
                    <p class="MarketingContent">
                        Jacka Fay ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="Marketing">
                    <div class="MarketingPic Pic2"></div>
                    <div class="MarketingHeading">Reliable Technology</div>
                    <p class="MarketingContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="Marketing">
                    <div class="MarketingPic Pic3"></div>
                    <div class="MarketingHeading">24/7 Monitoring</div>
                    <p class="MarketingContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
        <section class="SecondSection">
            <h1 class="FiveStar">5 Star Service</h1>
            <div class="FiveStarImage"></div>
        </section>
        <section class="ThirdSection">
            <h4 class="ReviewHeading">Reviews</h4>
            <p class="ReviewContent">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div class="v">John Doe</div>
        </section>
    </div>
    );
  }
}
