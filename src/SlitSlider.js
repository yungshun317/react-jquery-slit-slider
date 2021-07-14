import React from "react";

import $ from "jquery";

export default function SlitSlider() {
    return (
        <div id="slider" class="sl-slider-wrapper">
            <div class="sl-slider">
                <div class="sl-slide bg-1"
                     data-orientation="horizontal"
                     data-slice1-rotation="-25"
                     data-slice2-rotation="-25"
                     data-slice1-scale="2"
                     data-slice2-scale="2">
                    <div class="sl-slide-inner">
                        <div class="deco" data-icon="H"></div>
                        <h2>A bene placito</h2>
                        <blockquote>
                            <p>You have just dined, and however scrupulously the slaughterhouse is concealed in
                                the graceful distance of miles, there is complicity.</p>
                            <cite>Ralph Waldo Emerson</cite>
                        </blockquote>
                    </div>
                </div>

                <div className="sl-slide bg-2"
                     data-orientation="vertical"
                     data-slice1-rotation="10"
                     data-slice2-rotation="-15"
                     data-slice1-scale="1.5"
                     data-slice2-scale="1.5">
                    <div className="sl-slide-inner">
                        <div className="deco" data-icon="q"></div>
                        <h2>Regula aurea</h2>
                        <blockquote>
                            <p>Until he extends the circle of his compassion to all living things, man will not
                                himself find peace.</p>
                            <cite>Albert Schweitzer</cite>
                        </blockquote>
                    </div>
                </div>

                <div className="sl-slide bg-3"
                     data-orientation="horizontal"
                     data-slice1-rotation="3"
                     data-slice2-rotation="3"
                     data-slice1-scale="2"
                     data-slice2-scale="1">
                    <div className="sl-slide-inner">
                        <div className="deco" data-icon="O"></div>
                        <h2>Dum spiro, spero</h2>
                        <blockquote>
                            <p>Thousands of people who say they 'love' animals sit down once or twice a day to enjoy
                                the flesh of creatures who have been utterly deprived of everything that could make
                                their lives worth living and who endured the awful suffering and the terror of the
                                abattoirs.</p>
                            <cite>Dame Jane Morris Goodall</cite>
                        </blockquote>
                    </div>
                </div>

                <div className="sl-slide bg-4"
                     data-orientation="vertical"
                     data-slice1-rotation="-5"
                     data-slice2-rotation="25"
                     data-slice1-scale="2"
                     data-slice2-scale="1">
                    <div className="sl-slide-inner">
                        <div className="deco" data-icon="I"></div>
                        <h2>Donna nobis pacem</h2>
                        <blockquote>
                            <p>The human body has no more need for cows' milk than it does for dogs' milk,
                                horses' milk, or giraffes' milk.</p>
                            <cite>Michael Klaper M.D.</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}