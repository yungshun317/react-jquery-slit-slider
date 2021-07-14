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
            </div>
        </div>
    );
}